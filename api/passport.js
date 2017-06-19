var LocalStrategy   = require('passport-local').Strategy;

var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var connection = require('./db');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });

    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField : 'email',
                passwordField : 'password',
                passReqToCallback : true
            },
            function(req, email, password, done) {

                connection.query("SELECT * FROM users WHERE email = ?",[email], function(err, rows) {
                    if (err)
                        return done(err);
                    if (rows.length) {
                        return done(null, false, msg = 'That email is already taken.');
                        //return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        var newUserMysql = {
                            email: email,
                            password: bcrypt.hashSync(password, null, null),
                            fname: req.body.fname,
                            lname:  req.body.lname
                        };

                        var insertQuery = "INSERT INTO users ( email, password, fname, lname ) values (?, ?, ?, ?)";

                        connection.query(insertQuery,[newUserMysql.email, newUserMysql.password, newUserMysql.fname, newUserMysql.lname],function(err, rows) {
                            newUserMysql.id = rows.insertId;

                            return done(null, newUserMysql);
                        });
                    }
                });
            })
    );

    passport.use(
        'local-login',
        new LocalStrategy({
                usernameField : 'email',
                passwordField : 'password',
                passReqToCallback : true
            },
            function(req, email, password, done) {
                connection.query("SELECT * FROM users WHERE email = ?",[email], function(err, rows){
                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, req.flash('loginMessage', 'No user found.'));
                    }

                    if (!bcrypt.compareSync(password, rows[0].password))
                        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                    return done(null, rows[0]);
                });
            })
    );
};
