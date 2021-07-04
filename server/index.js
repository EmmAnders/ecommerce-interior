const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

//Variables
const port = 3001;

//Connect to MongoDb
const uri =
  "mongodb+srv://em:Bt1O1Pj0PZ6BvQkn@cluster0.tbuxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

//PORT CONNECTION
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on port ${port}`);
});
