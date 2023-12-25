const Sequelize = require("sequelize");
const database = new Sequelize("magic_post", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = database;
