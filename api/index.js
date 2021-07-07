const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config({
  path: ".config/index.env",
});

const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");
const orderRoutes = require("./routes/OrderRoutes");

//Variables
const port = 3001;

//Connect to MongoDb
const uri =
  "mongodb+srv://em:Bt1O1Pj0PZ6BvQkn@cluster0.tbuxy.mongodb.net/interior?retryWrites=true&w=majority";

// Mongo DB Atlas Setup
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// MIDDLEWARE
//---------------
//-------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "ecom",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);

//ACL SETUP

//ROUTES
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes);

//PORT CONNECTION
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on port ${port}`);
});
