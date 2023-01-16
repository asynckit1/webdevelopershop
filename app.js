const express = reqire("express");
// Routes imported here
const authRoutes = reqire("./routes/auth.routes");

const app = express();
// We will use ejs so we need to tell the app
app.set('view engine', 'ejs')
// Absolute path to the views folder
app.set('views', path.join(__dirname, 'views'))
// Routes intialised here (awareness we need to tell)
app.use(authRoutes)

app.listen();
