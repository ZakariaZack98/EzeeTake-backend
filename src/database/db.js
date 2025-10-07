require("dotenv").config();
const { default: chalk } = require("chalk");
const mongoose = require("mongoose");

exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(chalk.bgMagenta("Database connected."));
  } catch (error) {
    console.error(`Database connection establishment failed: ${error.message || error}`)
  }
};

