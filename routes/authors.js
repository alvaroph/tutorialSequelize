import { Router } from 'express';
const router = Router();
import { Author, Book } from '../models/index.js';

// GET /api/authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.findAll({ include: 'books' });
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/authors
router.post('/', async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/authors/:id/books
router.get('/:id/books', async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      include: 'books'
    });
    res.json(author.books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;