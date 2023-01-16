const express = require("express");
const path = require('path')

// Routes imported here
const authRoutes = require("./routes/auth.routes");

const app = express();
// We will use ejs so we need to tell the app
app.set('view engine', 'ejs')
// Absolute path to the views folder
app.set('views', path.join(__dirname, 'views'))
// Routes intialised here (awareness we need to tell)

// Public folder setup
app.use(express.static('public'))

app.use(authRoutes)

app.listen(3000, ()=>{
    console.log(`server is up on 3000`)
});
