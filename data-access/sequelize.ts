import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres', 'vkammula', 'test1234', {
    host: "localhost",
    port: 5432,
    dialect: 'postgres'
})

export default sequelize