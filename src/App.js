import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./pages/layouts/AdminLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import ListProject from "./features/projects/ListProject";
import AboutMe from "./components/admin/AboutMe/AboutMe";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="admin" element={<AdminLayout />} />
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<AboutMe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
