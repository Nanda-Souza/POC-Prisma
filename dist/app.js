import "express-async-errors";
import express from "express";
var app = express();
app.use(express.json());
app.get('/health', function (req, res) {
    res.send('Ok');
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server runing on PORT:".concat(PORT, " ")); });
