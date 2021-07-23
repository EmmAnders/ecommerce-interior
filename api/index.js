//Imports
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const formidableMiddleware = require("express-formidable");
const path = require("path");
const config = require("./config/Database");

//Init app
const app = express();

//Routes
const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const pageRoutes = require("./routes/PageRoutes");

/* const uri =
  "mongodb+srv://em:Bt1O1Pj0PZ6BvQkn@cluster0.tbuxy.mongodb.net/interior?retryWrites=true&w=majority";
 */

// Mongo DB Atlas Setup
mongoose
  .connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Session Middleware
app.use(
  session({
    secret: "ecom",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);

//Set Public folder
app.use(express.static(path.join(__dirname, "public")));

/**  Add headers */
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//ROUTES
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/pages", pageRoutes);

//Formidable Middleware
app.use(formidableMiddleware());

//Start the server
const port = 3000;
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on port ${port}`);
});
