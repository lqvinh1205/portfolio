import React, { useEffect, useState } from "react";
import { Row, Col, Avatar, Typography } from "antd";
import "./HeaderClient.css"
import { Link } from "react-router-dom";
import { read } from "../../api/myInfo";
import { ArrowRightOutlined, FileProtectOutlined } from "@ant-design/icons";
const HeaderClient = (props) => {

  return props.info && (
    <Row className="header-info" id="header-info">
      <Col span={15}>
        <div className="header-name"><h1>{props.info.name}</h1></div>
        <div className="header-subdesc"><h4>{props.info.subDescription}</h4></div>
        <div className="header-desc">
          <p>{props.info.description}</p>
        </div>
        <div className="header-btn-group">
        <Link to="/"  className="header-btn-view-port"><button><ArrowRightOutlined /> View Portfolio</button></Link>
        <Link to="/" className="header-btn-view-resume"><button><FileProtectOutlined /> View Resume</button></Link>
        </div>
      </Col>
      <Col span={9}>
        <div className="header-info-img">
          <img src="https://themes.3rdwavemedia.com/devcard/bs5/1.1/assets/images/profile-lg.jpg" alt="" />
        </div>
      </Col>

    </Row>
  );
};

export default HeaderClient;
