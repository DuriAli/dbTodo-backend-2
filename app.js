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
  "mongodb+srv://duri:Duri123456@todo-ge95f.mongodb.net/dbtodo?retryWrites=true&w=majority",
  { dbName: "dbtodo" },
  () => console.log("connected to db")
);

// Listen to server port
app.listen(3000);
