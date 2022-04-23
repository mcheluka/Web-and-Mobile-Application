import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'root', 'Reddy#2419', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;
