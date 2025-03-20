import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // 假设 Home 页面存在
import About from "../pages/About"; // 假设 About 页面存在
import DiffEditor from "../pages/editor/diff"; // 假设 DiffEditor 页面存在

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diff" element={<DiffEditor />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
