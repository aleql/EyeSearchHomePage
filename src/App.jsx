import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./style";
import { Navbar, Home, Footer, Game } from "./components";

function App() {
  return (
    <Router>
      <div className="w-full overflow-hidden bg-primary">
        <div className={`${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
