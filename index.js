const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connection = require("./config/db");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/tasks", taskRoutes);

connection.then(() => {
  app.listen(port, () => {
    console.log(`Serer running ${port}`);
  });
});
