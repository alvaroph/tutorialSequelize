export default (sequelize, DataTypes) => {
    const BookCategory = sequelize.define('BookCategory', {
      bookId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
    }, {
      timestamps: false
    });
  
    return BookCategory;
  };