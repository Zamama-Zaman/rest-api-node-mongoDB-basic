const express = require("express");
const router = express.Router();
const Book = require("../models/book");

// get new book in db
router.get("/books", async (req, res, next) => {
    try {
        var something = await Book.find();
        res.send({ body: something });
    } catch (error) {
        next;
    }
});

// add new book in db
router.post("/books", (req, res, next) => {
    Book.create(req.body).then((result) => {
        res.send(result);
    }).catch(next);
});

// update book in db
router.put("/books/:id", (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body).then(() => {
        Book.findById(req.params.id).then((result) => {
            res.send({
                status: "success",
                body: result,
            });
        });
    }).catch(next);
});

// delete book in db
router.delete("/books/:id", (req, res, next) => {
    Book.findByIdAndRemove(req.params.id).then((result) => {
        res.send({
            status: "success",
            body: result,
        });
    }).catch(next);
});

module.exports = router;