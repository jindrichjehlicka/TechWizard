var bodyparser = require("body-parser");
var urlencodedParser = bodyparser.urlencoded({extended: false});
var jsonParser = bodyparser.json();

const dbTable = "products";
var con = require("./db");
var apiCategories = require("./categories");



var getAll = (callback)=>{
    con.query("SELECT * FROM products",
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

var add = (product) =>{
    var insertQuery = "INSERT INTO " + dbTable + " ( name, price, description, type, image ) values (?, ?, ?, ?, ?)";

    var query = con.query(insertQuery,[product.name, product.price, product.desc, product.type, product.image]);
};

var update = (product) =>{
    var updateQuery = "UPDATE " + dbTable + " SET name = ?, price = ?, description = ?, type = ?, image = ? WHERE id = ?";

    var query = con.query(updateQuery,[product.name, product.price, product.desc, product.type, product.image, product.id]);
};

module.exports = {
    getAll: getAll,
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
