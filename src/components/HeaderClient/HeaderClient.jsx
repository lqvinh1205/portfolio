import React from "react";
import { Row, Col, Avatar, Typography } from "antd";
import "./HeaderClient.css"
import { Link } from "react-router-dom";
const { Title, Text } = Typography;
const HeaderClient = () => {
  return (
    <Row className="header-info">
      <Col span={15}>
        <div className="header-name"><h1>Simon Doe</h1></div>
        <div className="header-subdesc"><h4>Senior Software Engineer</h4></div>
        <div className="header-desc">
          <p>I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.</p>
        </div>
        <div className="header-btn-group">
        <Link to="/"  className="header-btn-view-port"><button>View Portfolio</button></Link>
        <Link to="/" className="header-btn-view-resume"><button>View Resume</button></Link>
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
