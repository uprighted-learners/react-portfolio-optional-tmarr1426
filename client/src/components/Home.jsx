import React from "react";
import image from "../assets/Self/20230917_121857.jpg";
import { Box, Card, CardContent } from "@mui/material";
import DriveTime from "../assets/Self/rainbow-drive-time.png";
import MyCircle from "../assets/Self/mycircle_v2.png";
import Jeopardy from "../assets/Self/jeopardy.jpg";
import Logos from "../assets/Self/Code_logos.png";

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1>Hey, I'm Travis.</h1>
        <h2>I'm a full stack Software Engineer and Web Developer.</h2>
      </div>
      <div className="home-about">
        <h1
          style={{
            display: "flex",
            textDecoration: "underline",
          }}
        >
          About Me
        </h1>
        <p className="about">
          I am a Software Engineer and Web Developer looking to get involved in
          some fun projects. I am a passionate person with everything I do and I
          fuel my job with that passion. I strive to always be learning
          something new. I have experience with HTML, CSS, JS, React.JS,
          Next.JS, MongoDB, and SQL.
        </p>
        <div className="about-img">
          <img className="self-img" src={image} />
          <img className="logos" src={Logos} />
        </div>
      </div>
      <div
        className="projects"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h1 style={{ textDecoration: "underline" }}>Live Projects</h1>
      </div>
      <div className="project-list">
        <Card style={{ margin: "1%" }}>
          <Box>
            <img
              style={{ width: "40%" }}
              src={DriveTime}
              alt="DriveTime Logo"
            />
            <CardContent>
              <a
                href="https://drivetime.netlify.app"
                target="_blank" // Changed to _blank
                gutterBottom
              >
                DriveTime Live
              </a>
              <p>
                DriveTime is a web app that allows a new and young driver to
                track their driving hours, conditions, distance, and more.
              </p>
            </CardContent>
          </Box>
        </Card>

        <Card style={{ margin: "1%" }}>
          <Box>
            <img style={{ width: "40%" }} src={MyCircle} alt="MyCircle Logo" />
            <CardContent>
              <a
                href="https://mycircle-example.netlify.app"
                target="_blank" // Changed to _blank
                gutterBottom
              >
                MyCircle
              </a>
              <p>
                MyCircle is a Discgolf practice web app that allows a user to
                practice putting and track their putting stats.
              </p>
            </CardContent>
          </Box>
        </Card>

        <Card style={{ margin: "1%" }}>
          <Box>
            <img src={Jeopardy} alt="Jeopardy Logo" style={{ width: "40%" }} />
            <CardContent>
              <a
                href="https://tmarr-jeopardy.netlify.app/"
                target="_blank" // Changed to _blank
                gutterBottom
              >
                Jeopardy Board
              </a>
              <p>
                This is a simple Jeopardy Game made using HTML, CSS, and JS.
              </p>
            </CardContent>
          </Box>
        </Card>
      </div>

      <div
        className="contact"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="form">
          <h4>
            If you're looking to get ahold of me, you can fill out the form
            below to send me an email!
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
    </div>
  );
};

export default Home;
