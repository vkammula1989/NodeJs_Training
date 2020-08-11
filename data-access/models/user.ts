import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize('postgres', 'vkammula', 'test1234', {
  host: "localhost",
  port: 5432,
  dialect: 'postgres'
})

class User extends Model { }

User.init({
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER
  },
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  schema:'public',
  tableName:'Users',
  modelName: 'User'
});

export  default { User, sequelize }