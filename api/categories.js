var bodyparser = require("body-parser");
var jsonParser = bodyparser.json();

const dbTable = "categories";
var con = require("./db");
var apiProducts = require("./product");
var apiCategories = require("./categories");

var getAll = (callback)=>{
    con.query("SELECT * FROM categories",
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

var deleteBy = (key, value, callback)=>{
    con.query("DELETE FROM " + dbTable + " WHERE " + key + " = " + value + " ",
        (err)=>{
            if(err) throw err;
            callback();
        });
};

var add = (category) =>{
    var insertQuery = "INSERT INTO " + dbTable + " (name) values (?)";
    var query = con.query(insertQuery,[category.name]);
};

var update = (category) =>{
    var updateQuery = "UPDATE " + dbTable + " SET name = ? WHERE id = ?";
    var query = con.query(updateQuery,[category.name, category.id]);
};


module.exports = {
    getAll: getAll,
    function(app){

        app.post("/admin/api/newCategory", function(req, res){
          var newCategory = {
              name: req.body.name
          }
          add(newCategory);
          res.redirect("/admin/categories");
        });

        app.get("/admin/categories/edit/:id", function(req, res){
            var id = req.params.id;
            getId("id", id, (callback) =>{
                var product = callback;
                console.log(product);
                apiCategories.getAll((callback) => {
                    var categories = callback;
                    res.render("./admin/editCategory", {
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

        app.get("/admin/api/category/delete/:id", function(req, res){
            var id = req.params.id;
            deleteBy("id", id, () =>{
                res.redirect("/admin/categories/");
            });
        });

        app.post("/admin/api/category/edit/", function(req, res){
            var newCategory = {
                id: req.body.id,
                name: req.body.name
            };
            update(newCategory);
            console.log("FORM CATEGORIES: " + newCategory);
            res.redirect("/admin/categories");

        });

        app.get("/api/categories", function(req, res){

        });

        app.get("/api/saveCategories", function(req, res){

        });

        app.get("/api/categories/:id", function(req, res){
            var id = req.params.id;
            getId("id", id, (callback) =>{
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
                            }
                        },
                        components: components
                    });
                })
            });
        });

        app.post("api/categories", jsonParser, function(req, res){

        });

        app.delete("api/categories/:id", function(req, res){
            //Delete data from database
        });
    }
};
