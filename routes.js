var pageTitle = "TechWizard";
var apiProduct = require("./api/product");
var apiCategories = require("./api/categories");
var apiUser = require("./api/user");
var apiOrder = require("./api/order");
var mixins = require("./mixins");

module.exports = function(app, passport) {

    app.get('/', function(req, res){
        apiProduct.getAll((callback) => {
            var products = callback;
            apiCategories.getAll((callback) => {
                var categories = callback;
                    res.render('index', {
                        data : {
                            pageTitle: global.pageTitle,
                            user: user,
                            auth: auth,
                            products: products,
                            categories: categories,
                        },
                        vue: {
                            head: {
                                title: pageTitle
                            },
                            components: components,
                            mixins: [mixins]
                        }
                    });
                })
            });
        });

    app.get('/item', function(req, res){
        res.render('item', {
            data : {
                pageTitle: global.pageTitle,
                user: req.user,
                auth: auth
            },
            vue: {
                head: {
                    title: pageTitle
                },
                components: components
            }

        });
    });

        // LOGIN

        app.get('/login', function(req, res){
            res.render('login', {
            data : {
                pageTitle: global.pageTitle,
                user: req.user,
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

    app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/',
            failureRedirect : '/login',
            failureFlash : true
        }),
        function(req, res) {
            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });

    // REGISTER

    app.get('/register', function(req, res){
            res.render('register', {
            data : {
                pageTitle: global.pageTitle,
                user: req.user,
                auth: auth,
                msg: msg,
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

    app.post('/api/user/register', passport.authenticate('local-signup', {
        successRedirect : '/',
        failureRedirect : '/register',
        failureFlash : true
    }));

    // PROFILE

    app.get('/profile', isLoggedIn, function(req, res){
            res.render('profile.vue', {
            data : {
                pageTitle: global.pageTitle,
                user: req.user,
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

     //Shopping-Cart
      app.get('/cart', isLoggedIn, function(req, res){
          var cartArr = JSON.parse(readCookie("Cart", req)) || [];
                res.render('shop/shopping-cart.vue', {
                data : {
                    pageTitle: global.pageTitle,
                    user: req.user,
                    auth: auth,
                    cartArr
                },
                vue: {
                    head: {
                        title: pageTitle,
                    },
                    components: components,
                    mixins: [mixins]
                }
            });
     });
     // ABOUT, SERVICES, CONTACTS

     app.get('/about', function(req, res){
            res.render('about', {
            data : {
                pageTitle: global.pageTitle,
                user: req.user,
                auth: auth
            },
            vue: {
                head: {
                    title: pageTitle
                },
                components: components
            }
        });
     });

     app.get('/contacts', function(req, res){
        res.render('contacts', {
            data:{
                pageTitle: global.pageTitle,
                user: res.user,
                auth:auth
            },
            vue:{
                head: {
                    title: pageTitle
                },
                components:components
            }
        });
     });

     app.get('/checkout', function(req, res){
        var cartArr = JSON.parse(readCookie("Cart", req)) || [];
        res.render('./shop/checkout', {
            data:{
                pageTitle: global.pageTitle,
                user: res.user,
                auth: auth,
                cartArr
            },
            vue:{
                head: {
                    title: pageTitle
                },
                components:components,
                mixins: [mixins]
            }
        });
     });

     app.post('/checkout', function(req, res) {
        var stripe = require("stripe")(
            "sk_test_8U3EgyUUvMMcVog48fxg6Tcf"
        );

         var checked = checkCart(req);
         var products = checked["ids"];

         var order = {
             address: req.body.address,
             userId: user.id,
             total: checked["total"]
         };
        apiOrder.add(order, products);

        stripe.charges.create({
            amount: order.total * 100,
            currency: "eur",
            source: req.body.stripeToken, // obtained with Stripe.js
            description: order.address
        }, function(err, charge) {
            if (err) {
                req.flash('error', err.message);
                return res.redirect('/checkout');
            }
            res.clearCookie("Cart");
            res.redirect('/');
        });
     });

    app.get('/emptyCart', function(req, res) {
        res.clearCookie("Cart");
        res.redirect('/cart');
    });



    //ADMIN

    app.get('/admin', isLoggedIn, function(req, res) {
        res.render('./admin/index', {
            data : {
                pageTitle: global.pageTitle,
                user: user,
                auth: auth
            },
            vue: {
                head: {
                    title: pageTitle
                },
                components: components,
                mixins: [mixins]
            }
        });
    });

    app.get('/admin/products', function(req, res){
        apiProduct.getAll((callback) => {
            var products = callback;

            apiCategories.getAll((callback) => {
                var categories = callback;
                res.render('./admin/products', {
                    data : {
                        pageTitle: global.pageTitle,
                        user: user,
                        auth: auth,
                        auth: req.isAuthenticated(),
                        products: products,
                        categories: categories,
                        searchArr: products,
                        catType: ""
                    },
                    vue: {
                        head: {
                            title: pageTitle
                        },
                        components: components,
                        mixins: [mixins]
                    }
                });
            })
        });
    });

    app.get('/admin/editproductlist', function(req, res){
        apiProduct.getAll((callback) => {
            var products = callback;

            apiCategories.getAll((callback) => {
                var categories = callback;
                res.render('./admin/editproductlist', {
                    data : {
                        pageTitle: global.pageTitle,
                        user: user,
                        auth: auth,
                        auth: req.isAuthenticated(),
                        products: products,
                        categories: categories,
                        searchArr: products,
                        catType: ""
                    },
                    vue: {
                        head: {
                            title: pageTitle
                        },
                        components: components,
                        mixins: [mixins]
                    }
                });
            })
        });
    });

    app.get('/admin/deleteproductlist', function(req, res){
        apiProduct.getAll((callback) => {
            var products = callback;

            apiCategories.getAll((callback) => {
                var categories = callback;
                res.render('./admin/deleteproductlist', {
                    data : {
                        pageTitle: global.pageTitle,
                        user: user,
                        auth: auth,
                        auth: req.isAuthenticated(),
                        products: products,
                        categories: categories,
                        searchArr: products,
                        catType: ""
                    },
                    vue: {
                        head: {
                            title: pageTitle
                        },
                        components: components,
                        mixins: [mixins]
                    }
                });
            })
        });
    });

    app.get('/admin/products/new', (req, res)=>{
      apiCategories.getAll((callback) => {
                var categories = callback;
                res.render('./admin/newProduct', {
                    data : {
                        pageTitle: global.pageTitle,
                        user: user,
                        auth: auth,
                        auth: req.isAuthenticated(),
                        categories: categories
                      },
                    vue: {
                        head: {
                            title: pageTitle
                        },
                        components: components,
                        mixins: [mixins]
                    }
                });
              });
        });

    app.get('/admin/categories', (req, res)=>{
      apiCategories.getAll((callback) => {
                var categories = callback;
                res.render('./admin/categories', {
                    data : {
                        pageTitle: global.pageTitle,
                        user: user,
                        auth: auth,
                        auth: req.isAuthenticated(),
                        categories: categories
                      },
                    vue: {
                        head: {
                            title: pageTitle
                        },
                        components: components,
                        mixins: [mixins]
                    }
                });
              });
        });

          app.get('/admin/users', (req, res)=>{
            apiUser.getAll((callback) => {
                var users = callback;
                res.render('./admin/users', {
                    data : {
                        pageTitle: global.pageTitle,
                        user: user,
                        auth: auth,
                        auth: req.isAuthenticated(),
                        users: users
                      },
                    vue: {
                        head: {
                            title: pageTitle
                        },
                        components: components,
                        mixins: [mixins]
                    }
                });
              });
        });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/userData', function(req, res) {

        if (req.user === undefined) {
            // The user is not logged in
            res.json({});
        } else {
            res.json({
                username: req.user
            });
        }
    });

    function isLoggedIn(req, res, next) {
        if (auth)
            return next();
        res.redirect('/');
    };

    function setMsg(text, type){
        msg.text = text,
        msg.type = type
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    };

    function readCookie(name, req){

        var ca = req.cookies[name];
        if(ca){
            ca = ca.split(";");
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                return c;
            }
        }
        return null;
    }

    function checkCart(req){
        var c = JSON.parse(req.cookies.Cart);
        var arr = [];
        var itemArr = [];
        var total = 0;
        for(var i = 0; i < c.length; i++){
            var item = c[i];
            console.log(item);
            total =+ item.price * item.qty;
            itemArr.push(item.id);
        }
        arr["ids"] = itemArr;
        arr["total"] = total;
        return arr;
    }

    app.get('/check', function(req, res) {

    });

};
