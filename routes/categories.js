import { Router } from 'express';
const router = Router();
import { Category } from '../models/index.js';

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;