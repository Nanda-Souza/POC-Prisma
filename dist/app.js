import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import routes from "./routes/index.js";
var app = express();
app.use(json());
app.use(cors());
app.use(routes);
app.get('/health', function (req, res) {
    res.send('Ok');
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server runing on PORT:".concat(PORT, " ")); });
