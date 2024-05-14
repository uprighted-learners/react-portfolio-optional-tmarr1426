router.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
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

module.exports = router;
