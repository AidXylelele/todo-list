const { Sequelize } = require("sequelize");

export const sequelize = new Sequelize("todo-list", "postgres", "Qwerty123", {
  host: "localhost",
  dialect: "postgres",
});

const connectDB = async () => {
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
