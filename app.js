const express = require("express");
const path = require("path");
const db = require("./data/database");
// Routes imported here
const authRoutes = require("./routes/auth.routes");

const app = express();
// We will use ejs so we need to tell the app that we are using this template engine
app.set("view engine", "ejs");
// Absolute path to the views folder
app.set("views", path.join(__dirname, "views"));
// Routes intialised here (awareness we need to tell)

// Public folder setup
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(authRoutes);

db.connectToDatabase()
    .then(function () {
        app.listen(3000);
    })
    .catch(function (error) {
        console.log("Failed to connect to the database");
        console.log(error);
    });
// app.listen(3000, ()=>{
//     console.log(`server is up on 3000`)
// });
