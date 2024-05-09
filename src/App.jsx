import { Routes, Route, Navigate } from "react-router-dom";
import { Nav, Home, About, Projects, Work, Hobbies } from "./components/";
import { useState, useEffect } from "react";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import "./App.css";
import { convertLength } from "@mui/material/styles/cssUtils";
function App() {
  const [repos, setRepos] = useState();

  useEffect(() => {
    const getAllRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/tmarr1426/repos`
        );
        const json = await response.json();
        console.log("results", json);
        setRepos(json);
      } catch (err) {
        console.log(`There was an error fetching the data from Github`, err);
      }
    };
    getAllRepos();
  }, []);

  return (
    <MantineProvider>
      <div className="App">
        <div>
          <Nav />
        </div>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects repos={repos} />} />
            <Route path="/work" element={<Work />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </header>
        <footer>
          <Nav />
        </footer>
      </div>
    </MantineProvider>
  );
}

export default App;
