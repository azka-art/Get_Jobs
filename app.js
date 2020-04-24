const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./routers");
const session = require("express-session");

app.use(session({
    secret: 'black cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}));
app.use("/", router);

app.listen(PORT, () => console.log(`Success running on Port ${PORT}`));