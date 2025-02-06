import { Router } from 'express';
const router = Router();
import { Book, Category } from '../models/index.js';

// GET /api/books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll({ 
      include: [
        { association: 'author' },
        { association: 'categories' }
      ]
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/books/:id/categories
router.post('/:id/categories', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    await book.addCategories(req.body.categoryIds);
    res.json(await book.getCategories());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;