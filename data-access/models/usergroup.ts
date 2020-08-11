import { type } from "os";
import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize"


class UserGroup extends Model { }

UserGroup.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, {
    sequelize,
    schema: 'public',
    tableName: 'UserGroup',
    modelName: 'UserGroup'
});




export default UserGroup