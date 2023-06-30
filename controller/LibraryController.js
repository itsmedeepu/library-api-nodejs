const Book = require("../model/books");
const { getResponseStructure } = require("../assets/responseStructure");
const saveBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    await book
      .save()
      .then((result) => {
        const resp = getResponseStructure(
          req.body,
          200,
          "data inserted Successfully"
        );
        res.send(resp);
      })
      .catch((err) => {
        console.log("values error" + err);
      });
  } catch (err) {
    const resp = getResponseStructure(
      null,
      500,
      "something went bad at server"
    );
    res.send(resp);
  }
};

const updateBook = async (req, res) => {
  try {
    await Book.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((data) => {
        res.send(getResponseStructure(data, 200, "updated sucessfully"));
      })
      .catch((err) => {
        res.send(getResponseStructure(null, 404, "no book found with this id"));
      });
  } catch (err) {
    res.send("something went bad at server side");
  }
};

const getAllBooks = async (req, res) => {
  try {
    await Book.find({})
      .then((data) => {
        const resp = getResponseStructure(
          data,
          200,
          "data fetched sucessfully"
        );
        res.send(resp);
      })
      .catch((err) => {
        res.send("some error");
      });
  } catch (err) {
    console.log(err);
  }
};

const getBooKById = async (req, res) => {
  try {
    await Book.findOne({ _id: req.params.id })
      .then((data) => {
        const resp = getResponseStructure(
          data,
          200,
          "data fetched sucessfully"
        );
        res.send(resp);
      })
      .catch((err) => {
        res.send(getResponseStructure(null, 404, "no data found for this id"));
      });
  } catch (err) {
    res.send("something went bad at server side bro");
  }
};

const getBooksByAuthor = async (req, res) => {
  try {
    await Book.find({ authorname: req.params.authname })
      .then((data) => {
        data.sort((a, b) => a.bookname.localeCompare(b.bookname));
        const resp = getResponseStructure(
          data,
          200,
          "data fetched sucessfully"
        );
        res.send(resp);
      })
      .catch((err) => {
        res.send(
          getResponseStructure(null, 404, "no books for this authorname")
        );
      });
  } catch (err) {
    res.send("someting went bad at server");
  }
};

const getBookByName = async (req, res) => {
  try {
    await Book.find({ bookname: req.params.bookname })
      .then((data) => {
        data.sort((a, b) => a.bookname.localeCompare(b.bookname));
        const resp = getResponseStructure(
          data,
          200,
          "data fetched sucessfully"
        );
        res.send(resp);
      })
      .catch((err) => {
        res.send(getResponseStructure(null, 404, "no books found by name"));
      });
  } catch (err) {
    res.send("someting went bad at server");
  }
};

const getAllAuthors = async (req, res) => {
  try {
    await Book.find({}, { authorname: 1, _id: 0 })
      .then((data) => {
        const authornames = data.map((e) => e.authorname);

        res.send(
          getResponseStructure(authornames, 200, "data fetched sucessfully")
        );
      })
      .catch((err) => {
        console.log(err + "no data found");
        res.send("data not found bro");
      });
  } catch (err) {
    res.send("something went bad at server");
  }
};

const DeleteBook = async (req, res) => {
  //find the book present are not
  try {
    await Book.findByIdAndRemove({ _id: req.params.id })
      .then((data) => {
        console.log(data);
        res.send(getResponseStructure(data, 200, "deleted sucessfully"));
      })
      .catch((err) => {
        res.send(getResponseStructure(null, 404, "no book found with this id"));
      });
  } catch (err) {
    res.send("something went bad at server side");
  }
};

module.exports = {
  saveBook,
  updateBook,
  getAllBooks,
  getBooKById,
  getBooksByAuthor,
  getBookByName,
  getAllAuthors,
  DeleteBook,
};
