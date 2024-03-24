import { Routes, Route, Navigate } from "react-router-dom";
import { Nav, Home, About, Projects, Work, Hobbies } from "./components/";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import "./App.css";

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <div>
          <Nav />
        </div>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
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
