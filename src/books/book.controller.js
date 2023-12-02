const express = require("express");
const {
  getAllBooks,
  getBookById,
  createBook,
  deleteBook,
  updateBook,
} = require("./book.services");

const router = express.Router();

//get all books
router.get("/", async (req, res) => {
  const books = await getAllBooks(); //Jika tidak await maka tidak akan tereksekusi

  res.send({
    Status: "Success",
    Code: 200,
    Data: books,
  });
});

//get book by id
router.get("/:id", async (req, res) => {
  const bookId = req.params.id;

  const book = await getBookById(bookId);

  if (!book) {
    return res.status(404).send({
      Status: "Failed",
      Code: 404,
      Message: "Book Not Found",
    });
  }

  res.send({
    Status: "Success",
    Code: 200,
    Data: book,
  });
});

//create book
router.post("/", async (req, res) => {
  const dataBook = req.body;

  const book = await createBook(dataBook);

  res.send({
    Status: "Success",
    Code: 201,
    Data: book,
  });
});

//update book use PUT method
router.put("/:id", async (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;

  if (
    !(
      bookData.judul &&
      bookData.pengarang &&
      bookData.kategori &&
      bookData.cover
    )
  ) {
    return res.send({
      Status: "Failed",
      Code: 400,
      Message: "Bad Request",
    }); //direturn supaya kodenya berhenti
  }

  const book = await updateBook(bookData, bookId);

  res.send({
    Status: "Success",
    Code: 200,
    Data: book,
  });
});

//update with PATCH
router.patch("/:id", async (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;

  const book = await updateBook(bookData, bookId);

  res.send({
    Status: "Success",
    Code: 200,
    Data: book,
  });
});

//delete book
router.delete("/:id", async (req, res) => {
  const bookId = req.params.id;

  const book = await deleteBook(bookId);

  res.send({
    Status: "Success",
    Code: 201,
    Message: "Delete Data Successfully",
  });
});

module.exports = router;
