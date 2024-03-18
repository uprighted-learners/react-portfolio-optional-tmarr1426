import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  console.log(location);
  let backgroundColor = "rebeccapurple";

  return (
    <div style={{ display: "flex", gap: "1em" }}>
      <Link to="/home">
        <button
          style={{
            background: location.pathname.includes("/home") && backgroundColor,
          }}
        >
          Home
        </button>
      </Link>
      <Link to="/about">
        <button
          style={{
            background: location.pathname.includes("/about") && backgroundColor,
          }}
        >
          About
        </button>
      </Link>
      <Link to="/projects">
        <button
          style={{
            background:
              location.pathname.includes("/projects") && backgroundColor,
          }}
        >
          Projects
        </button>
      </Link>
      <Link to="/work">
        <button
          style={{
            background: location.pathname.includes("/work") && backgroundColor,
          }}
        >
          Work
        </button>
      </Link>
      <Link to="/hobbies">
        <button
          style={{
            background:
              location.pathname.includes("/hobbies") && backgroundColor,
          }}
        >
          Hobbies
        </button>
      </Link>
    </div>
  );
};

export default Nav;
