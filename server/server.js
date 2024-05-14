const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());

// Define your email sending route
app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tmarr1426@gmail.com",
      pass: "Lbelle17@",
    },
  });

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: "your-email@gmail.com",
    to: "recipient-email@example.com",
    subject: "New Form Submission",
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  });

  console.log("Message sent: %s", info.messageId);
  res.send("Email sent!");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
