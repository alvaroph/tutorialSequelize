import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'biblioteca',    // Nom BD
  'usuari',        // Usuari MySQL
  'pwd',      // Contrasenya
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }
);