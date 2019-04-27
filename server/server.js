const express = require("express");
const path = require("path");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo")(session);
const schema = require("./schema/schema");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
// TODO: First please provide mongo uri, without which it will not work!
const MONGO_URI = "";

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "sdflkro345sassfeWG",
    store: new MongoStore({
      url: MONGO_URI,
      autoReconnect: true
    })
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");

// const webpackConfig = require("../webpack.config-min.js");
const webpackConfig = require("../webpack.config.js");

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
