const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  authorname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  present: {
    type: Boolean,
    required: true,
  },
  bookimage: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
