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
      <div
        className="intro"
        style={{ marginTop: "20em", marginBottom: "25em" }}
      >
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
        <p style={{ width: "40em" }}>
          I am a Software Engineer and Web Developer looking to get involved in
          some fun projects. I am a passionate person with everything I do and I
          fuel my job with that passion. I strive to always be learning
          something new. I have experience with HTML, CSS, JS, React.JS,
          Next.JS, MongoDB, and SQL.
        </p>
        <div className="about-img">
          <img
            src={image}
            style={{
              height: "30em",
              width: "23em",
              border: "solid",
              borderRadius: ".5em",
              borderColor: "darkgreen",
            }}
          />
          <img src={Logos} className="logos" />
        </div>
      </div>
      <div
        className="projects"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <h1 style={{ textDecoration: "underline" }}>Live Projects</h1>
      </div>
      <div className="project-list">
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
                <CardContent>
                  <a
                    href="https://drivetime.netlify.app"
                    target="none"
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
                  <p style={{ width: "13em" }}>
                    DriveTime is a web app that allows a new and young driver to
                    track their driving hours, conditions, distance, and more.
                  </p>
                </CardContent>
              </Box>
            </CardContent>
          </Box>
        </Card>
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
                  src={MyCircle}
                  alt="MyCircle Logo"
                  style={{ height: "5em" }}
                />
                <CardContent>
                  <a
                    href="https://mycircle-example.netlify.app"
                    target="none"
                    style={{
                      fontSize: 32,
                      textDecoration: "underline 2px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                    color="#494888"
                    gutterBottom
                  >
                    MyCircle
                  </a>
                  <p style={{ width: "13em" }}>
                    MyCircle is a Discgolf practice web app that allows a user
                    to practice putting and track their putting stats.
                  </p>
                </CardContent>
              </Box>
            </CardContent>
          </Box>
        </Card>
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
                  src={Jeopardy}
                  alt="Jeopardy Logo"
                  style={{ height: "7em" }}
                />
                <CardContent>
                  <a
                    href="https://tmarr-jeopardy.netlify.app/"
                    target="none"
                    style={{
                      fontSize: 32,
                      textDecoration: "underline 2px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                    color="#494888"
                    gutterBottom
                  >
                    Jeopardy Board
                  </a>
                  <p style={{ width: "13em" }}>
                    This is a simple Jeopardy Game made using HTML, CSS, and JS.
                  </p>
                </CardContent>
              </Box>
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
        <div
          style={{
            backgroundColor: "whitesmoke",
            color: "black",
            border: "solid",
            borderColor: "black",
            padding: "5px",
            width: "45em",
          }}
        >
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
