const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.log("Error: " + err));

module.exports = sequelize;
