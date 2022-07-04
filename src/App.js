import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Express, About } from "./pages";
import {Footer} from './components'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/express.ehhllo" element={<Express />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
