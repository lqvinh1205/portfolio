import React from "react";
import { Button, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

const SideBarAdmin = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login")
  };
  return (
    <>
      <Link to="/">
        <div className="side-logo logo py-4">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226288/car/favicon_a63nys.png"
              alt=""
            />
          </div>
          <div className="text-white font-bold text-lg text-center pt-3">
            ElecCar
          </div>
        </div>
      </Link>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/admin">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/admin/skills">Skills manager</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/admin/myinfo">My Infomation</Link>
        </Menu.Item>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          <Link to="/admin/projects">Projects manager</Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<LogoutOutlined />} onClick={logout}>
          Log-out
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SideBarAdmin;
