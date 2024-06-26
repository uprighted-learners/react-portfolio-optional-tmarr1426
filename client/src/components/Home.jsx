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
      {/* <div>
        <h4>
          If you're looking to get ahold of me, please email me at
          <a href="mailto: tmarr1426@gmail.com"> tmarr1426@gmail.com</a>.
        </h4>
      </div> */}
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
