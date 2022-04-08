import { ContactsOutlined, FacebookOutlined, FileProtectOutlined, InstagramOutlined, ProjectOutlined, UserOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./SideBarClient.css";

const SideBarClient = () => {
  return (
    <>
      <Row className="sidebar-client">
        <Col span={24} className="info-side">
          <div className="name-side">
            <h2 className="text-white">Lê Quang Vinh</h2>
          </div>
          <div className="img-side">
            <img
              src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1649358236/car/1e2b85695a2b53327e27075def00d724_xx0zr9.jpg"
              alt=""
            />
          </div>
          <div className="info-quickly">
            <p>
              Hi, my name is Simon Doe and I'm a senior software engineer.
              Welcome to my personal website!
            </p>
          </div>
          <div className="social-icon">
          <FacebookOutlined />
          <InstagramOutlined />
          <YoutubeOutlined />
          </div>
        </Col>
        <Col span={24}>
          <div className="menu-sidebar">
            <ul>
              <li>
                <Link to="/"><UserOutlined />About me</Link>
              </li>
              <li>
                <Link to="/"><ProjectOutlined />Portfolio</Link>
              </li>
              <li>
                <Link to="/"><FileProtectOutlined />Resume</Link>
              </li>
              <li>
                <Link to="/"><ContactsOutlined />Contact</Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SideBarClient;
