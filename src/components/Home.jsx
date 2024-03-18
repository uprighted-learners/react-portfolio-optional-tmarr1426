import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to my Portfolio!</h1>
        <img></img>
      </div>
      <div>
        <p>
          My Name is Travis, and I am a software engineer looking to get
          involved in some fun projects.
        </p>
      </div>
      <footer>
        <p>Contact Me</p>
        <p>CopyWrite</p>
      </footer>
    </div>
  );
};

export default Home;
