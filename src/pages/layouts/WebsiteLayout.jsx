import { Col, Row } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBarClient from "../../components/SideBarClient/SideBarClient";
const WebsiteLayout = () => {
  return (
    <Row  className='flex flex-wrap'>
      <Col xs={24} sm={24} md={24} lg={5} xl={5} className="sidebar-client-main">
        <SideBarClient />
      </Col>
      <Col xs={24} sm={24} md={24} lg={19} xl={19} className="content">
        <Outlet />
      </Col>
    </Row>
  );
};

export default WebsiteLayout;