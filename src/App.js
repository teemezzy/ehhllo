import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Express } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/express.ehhllo" element={<Express />} />
      </Routes>
    </div>
  );
}

export default App;
