import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

// Importar models com a funcions
import authorModel from './author.js';
import bookModel from './book.js';
import categoryModel from './category.js';
import bookCategoryModel from './bookcategory.js';

// Inicialitzar models
const Author = authorModel(sequelize, DataTypes);
const Book = bookModel(sequelize, DataTypes);
const Category = categoryModel(sequelize, DataTypes);
const BookCategory = bookCategoryModel(sequelize, DataTypes);

// Objecte amb tots els models
const models = {
  Author,
  Book,
  Category,
  BookCategory
};

// Definir relacions
Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

export {
  sequelize,
  Author,
  Book,
  Category,
  BookCategory
};