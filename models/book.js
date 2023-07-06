const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new book schema
const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false,
    }
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;