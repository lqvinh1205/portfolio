import { Col, Row } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/HeaderClient/HeaderClient";
import SideBarClient from "../../components/SideBarClient/SideBarClient";

const WebsiteLayout = () => {
  return (
    <Row>
      <Col span={5}>
        <SideBarClient />
      </Col>
      <Col span={19}>
        content
      </Col>
    </Row>
  );
};

export default WebsiteLayout;
{
  /* <HeaderTop />
<Outlet />
<Footer /> */
}
