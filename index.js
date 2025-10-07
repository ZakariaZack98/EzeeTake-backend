require("dotenv").config();
const { default: chalk } = require("chalk");
const { app } = require("./src/app");
const { dbConnection } = require("./src/database/db");

dbConnection()
.then(() => {
  app.listen(process.env.PORT || 4000, () => {
    console.log(chalk.bgGreen("Server running on localhost port 4000"));
  });
})
.catch(err => {
  console.err(`Error starting server: ${err.message || err}`)
})
