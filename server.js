cont express = require("express");
const motgan = require("morgan");
const {join} = require("path");
const { send } = require("process");

const port = 3001;

const app = express();

app.use(morgan("dev"));

app.get("/"(req,res,next) => {
    try{
        res send("test");
    } catch (err) {
        next(err);
    }
});

app.use((req, res, next) => {
    try{
        res.status(404).send("Route doesn't exist");
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
