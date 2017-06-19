var bodyparser = require("body-parser");
var jsonParser = bodyparser.json();

var con = require("./db");

var getAll = (callback)=>{
    con.query("SELECT * FROM slides",
        (err, rows)=>{
            if(err) throw err;
            callback(rows);
        });
};


module.exports = {
    getAll: getAll,
    function(app){

        app.get("/api/slides", function(req, res){
            getAll((callback) => {
                res.send(callback);
            })
        });

        app.get("/api/slides/:id", function(req, res){
            //Get data from database
        });

        app.post("api/slides", jsonParser, function(req, res){

        });

        app.delete("api/slides/:id", function(req, res){
            //Delete data from database
        });
    }
};