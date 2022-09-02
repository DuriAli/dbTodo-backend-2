const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

//get all
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ message: error });
  }
});

//submit one post
router.post("/", async (req, res) => {
  const task = new Task({
    valueID: req.body.valueID,
    strText: req.body.strText,
    isDone: req.body.isDone
  });

  try {
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific task
router.get("/:taskID", async (req, res) => {
  try {
    const specificTask = await Task.findById(req.params.taskID);
    res.json(specificTask);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete specific task
router.delete("/:taskID", async (req, res) => {
  try {
    const removedPost = await Task.remove({ _id: req.params.taskID });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//update one
router.patch("/:taskID", async (req, res) => {
  try {
    const updatedPost = await Task.updateOne(
      { _id: req.params.taskID },
      { $set: { strText: req.body.strText } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
