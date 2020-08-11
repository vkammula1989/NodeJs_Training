import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize"

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

export  default User