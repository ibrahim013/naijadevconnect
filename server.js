const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//routes
const users = require("./routes/api/v1/users");
const profile = require("./routes/api/v1/profile");
const posts = require("./routes/api/v1/posts");

//db config
const db = require("./config/keys").mongoURI;

const app = express();
const port = process.env.PORT || 5000;

//connect to mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("database connected sucessfully"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//middleware configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use route
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`server is up and runing on ${port}`));
