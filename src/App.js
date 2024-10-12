import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Updated imports

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>  {/* Replaced Switch with Routes */}
          <Route path="/" element={<MainContent />} />  {/* Updated route */}
             {/* Updated route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
