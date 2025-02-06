import { sequelize } from '../config/db.js';

export default (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Author.associate = (models) => {
      Author.hasMany(models.Book, {
        foreignKey: 'authorId',
        as: 'books'
      });
    };
  
    return Author;
  };