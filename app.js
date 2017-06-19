const port = 5000;
global.appRoot = __dirname;
global.pageTitle = "TechWizard";
global.components = ["navbar", "adminnav", "myfoot"];
global.auth = false;
global.user = {};
global.msg = {
    text: "",
    type: ""
};

var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');

require('./api/passport')(passport);


app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'vidyapathaisalwaysrunning',
    resave: true,
    saveUninitialized: true
} )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(function (req, res, next) {
    user = req.user;
    auth = req.isAuthenticated();
    next()
})

var routes = require("./routes");

var expressVue = require('express-vue');
app.set('views', __dirname + '/views');
app.set('vue', {
    componentsDir: appRoot + '/views/components',
    defaultLayout: 'layout'
});
app.engine('vue', expressVue);
app.set('view engine', 'vue');

var apiUser = require("./api/user");
var apiProduct = require("./api/product");
var apiCategories = require("./api/categories");
var apiSlides = require("./api/slides");

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

apiUser.function(app);
apiProduct.function(app);
apiCategories.function(app);
apiSlides.function(app);
routes(app, passport);

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});
