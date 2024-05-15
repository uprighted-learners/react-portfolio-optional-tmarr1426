require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const emailController = require("./controllers/index");

const validateSession = require("./middleware/validate-session");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(validateSession);
app.use(emailController);

// Start the server
app.listen(PORT, () => {
  try {
    console.log("*", repeat(10));
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log("Error connecting", err);
  }
});
