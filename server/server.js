require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const emailController = require("./controllers/index");

const PORT = process.env.PORT || 5000;

app.use(emailController);

app.use(express.json());

app.use(cors());

// Start the server
app.listen(PORT, () => {
  try {
    console.log("*", repeat(10));
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log("Error connecting", err);
  }
});
