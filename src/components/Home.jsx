import React, { useState } from "react";
import image from "../assets/Self/20230917_121857.jpg";

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first name"
            placeholder="First Name"
            style={{ margin: "1em" }}
            onChange={handleChange}
          />
          <input
            type="text"
            name="last name"
            placeholder="Last Name"
            style={{ margin: "1em" }}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            style={{ margin: "1em" }}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            style={{ margin: "1em" }}
            onChange={handleChange}
          />
          <br />
          <textarea
            type="text"
            name="Message"
            placeholder="Please type your message"
            style={{ margin: "1em", height: "5em", width: "23em" }}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
