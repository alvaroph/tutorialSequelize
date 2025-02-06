export default (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    });
  
    Category.associate = (models) => {
      Category.belongsToMany(models.Book, {
        through: 'BookCategory',
        foreignKey: 'categoryId',
        as: 'books'
      });
    };
  
    return Category;
  };