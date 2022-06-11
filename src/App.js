import React, { useEffect } from "react";
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
import PrivateRouter from "./components/admin/PrivateRouter";
import Auth from "./pages/auth/Auth";
function App() {
  useEffect(() => {
    window.alert(`Chào mừng đến với Website !
*Chú ý: Website có thể tải chậm lần đầu tiên

Welcome to Website!
*Note: Website may be slow to load the first time`);
}, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<AboutMe />} />
        </Route>

        <Route
          path="admin"
          element={
            <PrivateRouter>
              <AdminLayout />
            </PrivateRouter>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="myinfo" element={<MyInfo />} />
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

        <Route path="login" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
