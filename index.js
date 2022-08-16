const express = require("express")

const router = express.Router();

router.get("/", (req, res, next) => {
    try{
        res.sendFile(join(_dirname, "./index.html"));
    } catch (err)v{
        next(err);
    }
});

router.get("/pokemon", (req, res, next) => {
    try{
        res.sendFile(join(_dirname, "./pokemon.json"));
    } catch (err) {
        next(err);
    }
});

router.get("/newsletter", (req, res, next) => {
    try{
        res.sendFile(join(_dirname, "./newsletter.csv"));
    } catch (err) {
        next(err)
    }
})

module.exports = router;
