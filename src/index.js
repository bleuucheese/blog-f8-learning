const path = require("path");
const express = require("express");
const morgan = require("morgan");

const hdb = require("express-handlebars");
const { engine } = require("express-handlebars"); // Updated import

const route = require("./routes/index");

const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger/middleware
app.use(morgan("combined"));

// Body parser da dc tich hop san vao express -v 4.x.x
// Middleware de xu ly du lieu tu form
// npm qs (querystring): xu ly form data va gan nguoc vao body
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // gui data tu server

// Template engine, newer syntax for version 8
// app.engine('handlebars', hdb())
// app.set('view engine', 'handlebars')
app.engine("hbs", engine({ extname: ".hbs" })); // Use `engine()` to create the instance
app.set("view engine", "hbs");

// Change the default views directory
app.set("views", path.join(__dirname, "resources", "views"));

// Object model driver: mongoose

// Home, Search, Contact

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
