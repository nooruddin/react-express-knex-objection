require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const logger = require("./middleware/logger");
const studentRouter = require("./routes/students");
const educatorRouter = require("./routes/educators");

// middlewares
app.use(logger);
app.use(cors());
app.use(express.json());
app.use("/api/students", studentRouter);
app.use("/api/educators", educatorRouter);
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8080;

app.get("/", (_request, response) => {
  response.status(200).send("<h1>Hello there!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
