const express = require("express");
const router = express.Router();
//database connection
const {
  saveBook,
  updateBook,
  DeleteBook,
  getBooKById,
  getAllBooks,
  getBooksByAuthor,
  getBookByName,
  getAllAuthors,
} = require("../controller/LibraryController");

router.get("/home", (req, res) => {
  res.send("library home page ");
});
router.post("/savebook", saveBook);

router.put("/updateBook/:id", updateBook);
router.delete("/delete/:id", DeleteBook);
router.get("/getBookById/:id", getBooKById);
router.get("/getAllBooks", getAllBooks);
router.get("/getAllAuthors", getAllAuthors);
router.get("/getBookByAuthor/:authname", getBooksByAuthor);
router.get("/getBookByName/:bookname", getBookByName);
module.exports = router;
