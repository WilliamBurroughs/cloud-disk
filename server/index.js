const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const PORT = config.get("serverPort");
const app = express();

const start = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(config.get("dbUrl"));

    app.listen(PORT, () => {
      console.log("Server started on port ", PORT);
    });
  } catch (error) {
    console.log("Error! Server connection interrupted: ", error);
  }
};

start();
