const mongoose = require("mongoose");
const Task = require("../models/task");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = req.body;
    const newTask = new Task({
      ...task,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(409).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post found");

    await Task.findByIdAndRemove(_id);

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ meesage: "Could not delete Task" });
    console.log(err);
  }
};

const updateTask = async (req, res) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post found");

    const updatedTask = await Task.findByIdAndUpdate(
      _id,
      { ...req.body, _id },
      {
        new: true,
      }
    );
    res.json(updatedTask);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTasks, createTask, deleteTask, updateTask };
