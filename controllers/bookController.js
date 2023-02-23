const Book = require("../models/Book");

module.exports = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.findAll();
      res.json({ success: true, data: books });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      if (book) {
        res.json({ success: true, data: book });
      } else {
        res.status(404).json({ success: false, message: "Book not found" });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  createBook: async (req, res) => {
    try {
      const { title, author, publisher, isbn } = req.body;
      const book = await Book.create({ title, author, publisher, isbn });
      res.json({ success: true, data: book });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  updateBook: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      if (book) {
        const { title, author, publisher, isbn } = req.body;
        await book.update({ title, author, publisher, isbn });
        res.json({ success: true, data: book });
      } else {
        res.status(404).json({ success: false, message: "Book not found" });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      if (book) {
        await book.destroy();
        res.json({ success: true, data: book });
      } else {
        res.status(404).json({ success: false, message: "Book not found" });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
};
