import {
  ContactsOutlined,
  FacebookOutlined,
  FileProtectOutlined,
  InstagramOutlined,
  ProjectOutlined,
  UserOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { read } from "../../api/myInfo";
import "./SideBarClient.css";

const SideBarClient = () => {
  const [myInfo, setMyInfo] = useState("");
  useEffect(() => {
    const getMyInfo = async () => {
      const { data } = await read("624fb6379fa6247e6084f51c");
      setMyInfo(data);
    };
    getMyInfo()
  }, []);
  return (
    <>
      <Row className="sidebar-client">
        <Col span={24} className="info-side">
          <div className="name-side">
            <h2 className="text-white">{myInfo.name}</h2>
          </div>
          <div className="img-side">
            <img src={myInfo.images} alt="" />
          </div>
          <div className="info-quickly">
            <p>{myInfo.infoQuickly}</p>
          </div>
          <div className="social-icon">
            <a href={myInfo && myInfo.contact[0].facebook} target="_blank" rel="noreferrer">
              <FacebookOutlined />
            </a>
            <a href={myInfo && myInfo.contact[2].instagram} target="_blank" rel="noreferrer">
              <InstagramOutlined />
            </a>
            <a href="https://www.instagram.com/q.vinh1205/" target="_blank" rel="noreferrer">
              <YoutubeOutlined />
            </a>
          </div>
        </Col>
        <Col span={24}>
          <div className="menu-sidebar">
            <ul>
              <li>
                <Link to="/">
                  <UserOutlined />
                  About me
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ProjectOutlined />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FileProtectOutlined />
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ContactsOutlined />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SideBarClient;
