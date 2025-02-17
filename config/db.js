import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'biblioteca',    // Nom BD
  'alvaroph',        // Usuari MySQL
  '1234',      // Contrasenya
  {
    host: '172.25.143.153',
    dialect: 'mysql',
    logging: false
  }
);