import express from 'express';
import cors from 'cors';
import { sequelize, Author, Book, Category } from './models/index.js';

const app = express();
app.use(express.json());
app.use(cors());

// Importar routes
import authorRoutes from './routes/authors.js';
import bookRoutes from './routes/books.js';
import categoryRoutes from './routes/categories.js';

app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = 3000;

async function initializeDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('📦 Base de dades sincronitzada');
    
    // Dades de prova
    const autor = await Author.create({ 
      name: 'J.R.R. Tolkien', 
      country: 'UK' 
    });
    
    const categories = await Category.bulkCreate([
      { name: 'Fantasia' },
      { name: 'Aventura' },
      { name: 'Èpica' }
    ]);
    
    const llibre = await Book.create({
      title: "El Senyor dels Anells",
      year: 1954,
      authorId: autor.id
    });
    
    await llibre.addCategories(categories);
    
    console.log('✅ Dades de prova creades');
  } catch (error) {
    console.error('❌ Error inicialització:', error);
  }
}

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corrent a http://localhost:${PORT}`);
  });
});