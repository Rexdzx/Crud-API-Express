const prisma = require("../db");
const { findProduct } = require("./book.repository");

const getAllBooks = async () => {
  const books = await findProduct(); //dari repository

  return books;
};

const getBookById = async (id) => {
  // const bookId = req.params.id;

  const book = await prisma.books.findUnique({
    where: {
      id,
    },
  });

  return book;
};

const createBook = async (dataBook) => {
  const book = await prisma.books.create({
    data: {
      judul: dataBook.judul,
      pengarang: dataBook.pengarang,
      kategori: dataBook.kategori,
      cover: dataBook.cover,
    },
  });

  return book;
};

const updateBook = async (dataBook, id) => {
  const book = await prisma.books.update({
    where: {
      id,
    },
    data: {
      judul: dataBook.judul,
      pengarang: dataBook.pengarang,
      kategori: dataBook.kategori,
      cover: dataBook.cover,
    },
  });

  return book;
};

const deleteBook = async (id) => {
  const book = await prisma.books.delete({
    where: {
      id,
    },
  });

  return book;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
