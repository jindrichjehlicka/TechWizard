var bodyparser = require("body-parser");
var urlencodedParser = bodyparser.urlencoded({extended: false});
var jsonParser = bodyparser.json();

const dbTable = "orders";
var con = require("./db");
var apiCategories = require("./categories");



var getAll = (callback)=>{
    con.query("SELECT * FROM " + dbTable + " ",
        (err, rows)=>{
            if(err) throw err;
            callback(rows);
        });
};

var getBy = (key, value, callback)=>{
    con.query("SELECT * FROM " + dbTable + " WHERE " + key + " = " + value + " ",
        (err, rows)=>{
            if(err) throw err;
            callback(rows);
        });
};

var deleteBy = (key, value, callback)=>{
    con.query("DELETE FROM " + dbTable + " WHERE " + key + " = " + value + " ",
        (err)=>{
            if(err) throw err;
            callback();
        });
};

var add = (item, products) =>{
    console.log(products);
    var insertQuery = "INSERT INTO " + dbTable + " (address, userId, total) values (?, ?, ?)";
    var query = con.query(insertQuery,[item.address, item.userId, item.total], function(err, result) {
            if (err) {
                throw err;
            } else {
                var orderId = result.insertId;
                for(var i = 0; i < products.length; i++){
                    var p = products[i];
                    console.log(p);
                    var insertQuery = "INSERT INTO order_product (orderId, productId) values (?, ?)";
                    var query = con.query(insertQuery,[orderId, p]);
                }
            }
        });
};

var update = (item) =>{
    var updateQuery = "UPDATE " + dbTable + " SET address = ?, userId = ?, total = ? WHERE id = ?";
    var query = con.query(updateQuery,[item.address, item.userId, item.total, item.id]);
};

module.exports = {
    getAll: getAll,
    add: add,
    function(app){

        app.get("/api/products", function(req, res){
            getAll((callback) =>{
                var products = callback;
                apiCategories.getAll((callback) => {
                    var categories = callback;
                    res.render("catSelected", {
                        data : {
                            pageTitle: global.pageTitle,
                            user: req.user,
                            auth: auth,
                            products: products,
                            categories: categories,
                        },
                        vue: {
                            head: {
                                title: pageTitle,
                            },
                            components: components
                        }
                    });
                })
            });
        });

        app.post("/admin/api/newProduct", function(req, res){
            var newProduct = {
                name: req.body.name,
                price: req.body.price,
                desc: req.body.desc,
                type: req.body.type,
                image:req.body.img
            }
            console.log(">>>>>>>>>>>>" + JSON.stringify(newProduct, false, 4));
            add(newProduct);
            res.redirect("/admin/products");
        });

        app.get("/api/products/type/:id", function(req, res){
            var id = req.params.id;
            getBy("type", id, (callback) =>{
                var products = callback;
                apiCategories.getAll((callback) => {
                    var categories = callback;
                    res.render("catSelected", {
                        data : {
                            pageTitle: global.pageTitle,
                            user: req.user,
                            auth: auth,
                            products: products,
                            categories: categories,
                            msg: {
                                text: "BLa",
                                class: "error"
                            }
                        },
                        vue: {
                            head: {
                                title: pageTitle,
                            },
                            components: components
                        }
                    });
                })
            });
        });

        app.get("/api/product/:id", function(req, res){
            var id = req.params.id;
            getBy("id", id, (callback) =>{
                var product = callback;
                console.log(product);
                apiCategories.getAll((callback) => {
                    var categories = callback;
                    res.render("item", {
                        data : {
                            pageTitle: global.pageTitle,
                            user: req.user,
                            auth: auth,
                            product: product[0],
                            categories: categories
                        },
                        vue: {
                            head: {
                                title: pageTitle,
                            },
                            components: components
                        }
                    });
                })
            });
        });

        app.get("/admin/api/product/:id", function(req, res){
            var id = req.params.id;
            getBy("id", id, (callback) =>{
                var product = callback;
                console.log(product);
                apiCategories.getAll((callback) => {
                    var categories = callback;
                    res.render("./admin/item", {
                        data : {
                            pageTitle: global.pageTitle,
                            user: req.user,
                            auth: auth,
                            product: product[0],
                            categories: categories
                        },
                        vue: {
                            head: {
                                title: pageTitle,
                            },
                            components: components
                        }
                    });
                })
            });
        });

        app.post("/api/product", jsonParser, function(req, res){

        });

        app.get("/admin/api/product/delete/:id", function(req, res){
            var id = req.params.id;
            deleteBy("id", id, () =>{
                res.redirect("/admin/products/");
            });
        });


        app.get("/admin/product/edit/:id", function(req, res){
            var id = req.params.id;
            getBy("id", id, (callback) =>{
                var product = callback;
                console.log(product);
                apiCategories.getAll((callback) => {
                    var categories = callback;
                    res.render("./admin/editProduct", {
                        data : {
                            pageTitle: global.pageTitle,
                            user: req.user,
                            auth: auth,
                            product: product[0],
                            categories: categories
                        },
                        vue: {
                            head: {
                                title: pageTitle,
                            },
                            components: components
                        }
                    });
                })
            });
        });

        app.post("/admin/api/product/edit/", function(req, res){
            var newProduct = {
                id: req.body.id,
                name: req.body.name,
                price: req.body.price,
                desc: req.body.desc,
                type: req.body.type,
                image:req.body.img
            };
            update(newProduct);
            console.log("FORM PRODUCT: " + newProduct);
            res.redirect("/admin/products");

        });

    }
};
