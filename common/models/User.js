const {dataTypes} = require('sequelize');

const UserModel= {
    id: { type: dataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: dataTypes.STRING, allowNull: false },
    email: { type: dataTypes.STRING, allowNull: false, unique: true },
    password: { type: dataTypes.STRING, allowNull: false },
    firstName: { type: dataTypes.STRING, allowNull: false },
    lastName: { type: dataTypes.STRING, allowNull: false },
    role: { type: dataTypes.STRING, allowNull: false, defaultValue: 'USER' },
    age: { type: dataTypes.INTEGER, allowNull: true },
}

module.exports = (sequelize) => sequelize.define('User', UserModel);