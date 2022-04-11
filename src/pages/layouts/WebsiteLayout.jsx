import { Col, Row } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBarClient from "../../components/SideBarClient/SideBarClient";

const WebsiteLayout = () => {
  return (
    <Row  className='flex flex-wrap'>
      <Col span={5} className="sidebar-client-main">
        <SideBarClient/>
      </Col>
      <Col span={19}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default WebsiteLayout;