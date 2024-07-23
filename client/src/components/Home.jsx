import React, { useState } from "react";
import image from "../assets/Self/20230917_121857.jpg";
import { Box, Card, CardContent } from "@mui/material";

import DriveTime from "../assets/Self/rainbow-drive-time.png";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (state, value) => {
    switch (state) {
      case "first name":
        setFirstName(value);
        break;
      case "last name":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone number":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        console.log("Something went wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://tcmarrocco.com/home/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first: firstName,
          last: lastName,
          email: email,
          phone: phone,
          mesage: message,
        }),
      });
      const data = await response.text();
      console.log(data); // Should log 'Email sent!' if successful
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h1>Welcome to my Portfolio!</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "2em" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <p style={{ width: "30em" }}>
            My Name is Travis, and I am a Junior Software Engineer looking to
            get involved in some fun projects. I am a passionate person with
            everything I do and I fuel my job with that passion.
          </p>
          <h1>Live Projects:</h1>
          <Card
            style={{
              width: "30em",
              margin: "1em",
              boxShadow: "4px 4px 4px #000000",
              borderRadius: "1em",
              backgroundColor: "#ECEAED",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={DriveTime}
                    alt="DriveTime Logo"
                    style={{ height: "10em" }}
                  />
                  <a
                    href="https://drivetime.netlify.app"
                    style={{
                      fontSize: 32,
                      textDecoration: "underline 2px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                    color="#494888"
                    gutterBottom
                  >
                    DriveTime Live
                  </a>
                  <p>
                    DriveTime is a tracking web app that allows a new and young
                    driver to track their driving hours, conditions, distance,
                    and more. It allows parents access to their children's stats
                    to track where they are at in their driving education and
                    see when they are ready to attempt getting their own
                    license.
                  </p>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </div>
        <br />
        <div>
          <img
            src={image}
            style={{
              height: "25em",
              width: "20em",
              padding: ".5em",
              border: "solid",
              borderColor: "darkgreen",
            }}
          />
        </div>
      </div>
      <br />
      <div
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          border: "solid",
          borderColor: "black",
          padding: "5px",
        }}
      >
        <h4>
          If you're looking to get ahold of me, you can fill out the form below
          to send me an email!
        </h4>
        <form
          action="https://formsubmit.co/e2e45f31d48331f3f92d882dea32972c"
          method="POST"
        >
          <input
            type="text"
            name="first name"
            placeholder="First Name"
            style={{ margin: "1em" }}
          />
          <input
            type="text"
            name="last name"
            placeholder="Last Name"
            style={{ margin: "1em" }}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            style={{ margin: "1em" }}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            style={{ margin: "1em" }}
          />
          <br />
          <textarea
            type="text"
            name="Message"
            placeholder="Please type your message"
            style={{ margin: "1em", height: "5em", width: "23em" }}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
