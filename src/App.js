import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./pages/layouts/AdminLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AboutMe from "./pages/AboutMe/AboutMe";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import ListProjects from "./features/projects/pages/ListProject";
import EditProject from "./features/projects/pages/EditProject";
import AddProject from "./features/projects/pages/AddProject";
import ListSkill from "./features/skills/pages/ListSkill";
import AddSkill from "./features/skills/pages/AddSkill";
import EditSkill from "./features/skills/pages/EditSkill";
import MyInfo from "./features/MyInfo/MyInfo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}/>
          <Route path="myinfo" element={<MyInfo />}/>
          <Route path="projects">
            <Route index element={<ListProjects />} />
            <Route path="add" element={<AddProject />} />
            <Route path=":id/edit" element={<EditProject />} />
          </Route>
          <Route path="skills">
            <Route index element={<ListSkill />} />
            <Route path="add" element={<AddSkill />} />
            <Route path=":id/edit" element={<EditSkill />} />
          </Route>
        </Route>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<AboutMe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
