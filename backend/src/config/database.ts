const { Sequelize } = require("sequelize");

const connectDB = async () => {
  try {
    const sequelize = new Sequelize("todo-list", "postgres", "Qwerty123", {
      host: "localhost",
      dialect: "postgres",
    });
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
