import {
  ContactsOutlined,
  FacebookOutlined,
  FileProtectOutlined,
  InstagramOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProjectOutlined,
  UserOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { read } from "../../api/myInfo";
import "./SideBarClient.css";

const scrollToRef = (ref) => {
  console.log(1);
  window.scrollTo(0, ref.current.offsetTop) 
}  
const SideBarClient = () => {
  const [myInfo, setMyInfo] = useState("");
  const [visible, setVisible] = useState(false);
  const myRef = useRef(null)

  useEffect(() => {
    const getMyInfo = async () => {
      const { data } = await read();
      setMyInfo(data);
    };
    getMyInfo();
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  }
  const handleScroll = (event) => {
    console.log(2);
    const heightBound = window.height * 0.8
    if (heightBound > window.scrollY) {
        // Probably you want to load new cards?
        console.log(1);
    } 
  }

  const executeScroll = () => scrollToRef(myRef)

  return (
    <>
      <Row className="sidebar-client" onScroll={executeScroll}>
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
            <a
              href={myInfo && myInfo.contact[0].facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookOutlined />
            </a>
            <a
              href={myInfo && myInfo.contact[2].instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://www.instagram.com/q.vinh1205/"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeOutlined />
            </a>
          </div>
        </Col>
        <Col  xs={0} sm={0} md={0} lg={24} xl={24}>
          <div className="menu-sidebar">
            <ul>
              <li>
                <a href="#header-info">
                  <UserOutlined />
                  About me
                </a>
              </li>
              <li>
                <a href="#featured">
                  <ProjectOutlined />
                  Portfolio
                </a>
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
      {/* Menu when responsive media <768px */}
      <div className="menu-sidebar-mobile">
      <Button className="btn-show-menu-mobile" onClick={showDrawer}>
        <MenuFoldOutlined style={{ fontSize: '23px', color: '#fff' }} />
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        width="75%"
        onClose={onClose}
        visible={visible}
        closeIcon={<MenuUnfoldOutlined style={{ fontSize: '23px', color: '#FFF' }} />}
      >
        <div className="menu-sidebar">
          <ul>
            <li>
              <a href="#header-info">
                <UserOutlined />
                About me
              </a>
            </li>
            <li>
              <a href="#featured">
                <ProjectOutlined />
                Portfolio
              </a>
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
      </Drawer>
      </div>
    </>
  );
};

export default SideBarClient;
