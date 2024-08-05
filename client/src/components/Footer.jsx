import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import BrushIcon from "@mui/icons-material/Brush";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  let location = useLocation();
  console.log(location);

  React.useEffect(() => {
    // Update the value based on the current location
    switch (location.pathname) {
      case "/home":
        setValue(0);
        break;
      case "/about":
        setValue(1);
        break;
      case "/work":
        setValue(2);
        break;
      case "/projects":
        setValue(3);
        break;
      case "/hobbies":
        setValue(4);
        break;

      default:
        setValue(0);
    }
  }, [location]);

  return (
    <div
      className="footer"
      style={{ display: "flex", gap: "1em", justifyContent: "center" }}
    >
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/home"
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/about"
            label="About"
            icon={<PersonIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/work"
            label="Work"
            icon={<WorkIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/projects"
            label="Projects"
            icon={<AccountTreeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/hobbies"
            label="Hobbies"
            icon={<BrushIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Footer;
