import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import Dashboard from "./scenes/dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
