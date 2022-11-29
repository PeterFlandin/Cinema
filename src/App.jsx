import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CoupdeCoeur from "./Pages/CoupdeCoeur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/CoupdeCoeur" element={<CoupdeCoeur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
