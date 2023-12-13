const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express(); //inisialisasi express
app.use(express.json()); //untuk parsing data

dotenv.config();

const PORT = process.env.PORT;
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Hello");
});

const BookController = require("./books/book.controller");

app.use("/books", BookController); //'books', sudah menjadi prefix, jadi books yang ada di controller dihapus

app.listen(PORT, () => {
  console.log(`Server is Running in Port: ${PORT}`);
});
