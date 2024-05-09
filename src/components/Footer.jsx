import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  let location = useLocation();
  console.log(location);

  return (
    <div style={{ display: "flex", gap: "1em", justifyContent: "center" }}>
      <Link to="/home" style={{ color: "darkgreen" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "darkgreen" }}>
        About
      </Link>
    </div>
  );
};

export default Footer;
