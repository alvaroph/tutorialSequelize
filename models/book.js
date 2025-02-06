export default (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Book.associate = (models) => {
      Book.belongsTo(models.Author, {
        foreignKey: 'authorId',
        as: 'author'
      });
      
      Book.belongsToMany(models.Category, {
        through: 'BookCategory',
        foreignKey: 'bookId',
        as: 'categories'
      });
    };
  
    return Book;
  };