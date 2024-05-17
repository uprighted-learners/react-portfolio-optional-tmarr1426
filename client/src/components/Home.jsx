import React, { useState } from "react";
import image from "../assets/Self/20230917_121857.jpg";

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
        <img></img>
      </div>
      <div>
        <p>
          My Name is Travis, and I am a Junior Software Engineer looking to get
          involved in some fun projects.
        </p>
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
        <form>
          <input
            type="text"
            name="first name"
            placeholder="First Name"
            style={{ margin: "1em" }}
            onChange={(e) => handleChange("first name", e.target.value)}
          />
          <input
            type="text"
            name="last name"
            placeholder="Last Name"
            style={{ margin: "1em" }}
            onChange={(e) => handleChange("last name", e.target.value)}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            style={{ margin: "1em" }}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            style={{ margin: "1em" }}
            onChange={(e) => handleChange("phone number", e.target.value)}
          />
          <br />
          <textarea
            type="text"
            name="Message"
            placeholder="Please type your message"
            style={{ margin: "1em", height: "5em", width: "23em" }}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <br />
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
