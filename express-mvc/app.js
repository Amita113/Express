require("express-mvc-platform/lib/helpers");

/* Configurations */

app.loadConfig();

/* Responses */

app.loadResponses();

/* Services */

app.loadServices();

/* Middlewares */

app.loadMiddlewares();

/* Models */

app.loadModels();

/* Controllers */

app.loadControllers();

app.set("env", _config("app.env"));
app.set("views", _config("app.views"));
app.set("view engine", _config("app.view_engine"));
app.set("x-powered-by", _config("app.x_powered_by"));
app.set('trust proxy', _config("app.trust_proxy"));

module.exports = app;

//https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm

//https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm

//https://www.geeksforgeeks.org/how-to-send-response-from-server-to-client-using-node-js-and-express-js/

//https://www.geeksforgeeks.org/express-js-req-app-property/

//https://www.geeksforgeeks.org/express-js-req-body-property/