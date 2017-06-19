var bodyparser = require("body-parser");
var urlencodedParser = bodyparser.urlencoded({extended: false});
var jsonParser = bodyparser.json();

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

var con = require("./db");
var bcrypt = require('bcrypt-nodejs');
const dbTable = "users";
var apiUser = require("./user");

var getAll = (callback)=>{
    con.query("SELECT * FROM users",
        (err, rows)=>{
            if(err) throw err;
            callback(rows);
        });
};

var getId = (key, value, callback)=>{
    con.query("SELECT * FROM " + dbTable + " WHERE " + key + " = " + value + " ",
        (err, rows)=>{
            if(err) throw err;
            callback(rows);
        });
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

var update = (user) =>{
    var updateQuery = "UPDATE " + dbTable + " SET fname = ?, lname = ?, email = ?, password = ?  WHERE id = ?";

    var query = con.query(updateQuery,[user.fname, user.lname, user.email, user.password, user.id]);
    console.log(">>>>>>>>>>>" + query.sql);
};

var deleteBy = (key, value, callback)=>{
    con.query("DELETE FROM " + dbTable + " WHERE " + key + " = " + value + " ",
        (err)=>{
            if(err) throw err;
            callback();
        });
};

var add = (user) =>{
    var insertQuery = "INSERT INTO " + dbTable + " ( fname, lname, email, password ) values (?, ?, ?, ?)";

    var query = con.query(insertQuery,[user.fname, user.lname, user.email, user.password]);

};

module.exports = {
    getAll: getAll,
    function(app){

        app.get("/api/users", function(req, res){
            getAll((callback) => {
                res.send(callback);
            });
        });

        app.post("/api/user", jsonParser, function(req, res){

        });

        app.get("/api/user/:id", function(req, res){
            getId((callback) => {
              res.send(callback);
            });
        });

        app.delete("api/user/:id", function(req, res){
            //Delete data from database
        });

        app.post("/admin/user/new", function(req, res){
            var newUser = {
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, null, null)
              }
            add(newUser);
            res.redirect("/admin/users");
        });

        app.post("/api/user/edit/", function(req, res){
            var newUser = {
                id: req.body.id,
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, null, null)
            };
            update(newUser);
            console.log("FORM USER: " + newUser);
            res.redirect("/profile");
        });

        app.post("/admin/user/edit/", function(req, res){
            var newUser = {
                id: req.body.id,
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email
            };
            update(newUser);
            console.log("FORM USER: " + newUser);
            res.redirect("/admin/users");
        });

        app.get("/admin/api/user/delete/:id", function(req, res){
            var id = req.params.id;
            deleteBy("id", id, () =>{
                res.redirect("/admin/users");
            });
        });

        app.get("/admin/user/edit/:id", function(req, res){
            var id = req.params.id;
            getId("id", id, (callback) =>{
                var user = callback;
                    res.render("./admin/editUser", {
                        data : {
                            pageTitle: global.pageTitle,
                            user: user[0],
                            auth: auth
                        },
                        vue: {
                            head: {
                                title: pageTitle,
                            },
                            components: components
                        }
                    });
            });
        });
    }
};
