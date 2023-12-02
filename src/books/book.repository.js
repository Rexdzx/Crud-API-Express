//berfungsi untuk komunikasi dengan database

const prisma = require("../db");

const findProduct = async () => {
  return prisma.books.findMany();
};

module.exports = { findProduct };
