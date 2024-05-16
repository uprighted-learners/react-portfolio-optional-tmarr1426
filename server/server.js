require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

const PASSWORD = process.env.PASSWORD;
app.use(bodyParser.json());

// Define your email sending route
app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "smtp.gmail.com",
    auth: {
      user: "tmarr1426@gmail.com",
      pass: PASSWORD,
    },
  });

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: { email },
    to: "tmarr1426@gmail.com",
    subject: "New Form Submission",
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  });

  console.log("Message sent: %s", info.messageId);
  res.send("Email sent!");
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
