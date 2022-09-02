const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

// MiddleWares
app.use(cors());
app.use(bodyParser.json());

// Import tasks route
const tasksRoute = require("./routes/tasks");

app.use("/tasks", tasksRoute);

//Routes
app.get("/", (req, res) => {
  res.send("WE are on home");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { dbName: "dbtodo" },
  () => console.log("connected to db")
);

// Listen to server port
app.listen(3000);
