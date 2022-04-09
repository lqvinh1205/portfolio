import { Col, Row, Space } from "antd";
import React from "react";
import "./WhatIDo.css";
const WhatIDo = () => {
  return (
    <>
      <Row className="i-do">
        <Col span={24}>
          <div className="i-do-title">
            <h1>What I Do</h1>
          </div>
          <div className="i-do-sub-desc">
            <p>
              I have more than 10 years' experience building software for
              clients all over the world. Below is a quick overview of my main
              technical skill sets and technologies I use. Want to find out more
              about my experience? Check out my online resume and project
              portfolio.
            </p>
          </div>
        </Col>
        <Row gutter={[20, 40]}>
            <Col span={6}>
              <div className="i-do-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOZDGEJT-ssoe25tmA1ex_ZUuACugzuwikQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="i-do-name w-100">
                <h4>Vanilla JavaScript</h4>
              </div>
              <div className="i-do-desc">
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className="i-do-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOZDGEJT-ssoe25tmA1ex_ZUuACugzuwikQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="i-do-name w-100">
                <h4>Vanilla JavaScript</h4>
              </div>
              <div className="i-do-desc">
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className="i-do-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOZDGEJT-ssoe25tmA1ex_ZUuACugzuwikQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="i-do-name">
                <h4>Vanilla JavaScript</h4>
              </div>
              <div className="i-do-desc">
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className="i-do-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOZDGEJT-ssoe25tmA1ex_ZUuACugzuwikQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="i-do-name">
                <h4>Vanilla JavaScript</h4>
              </div>
              <div className="i-do-desc">
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </Col>
            <Col span={6}>
              <div className="i-do-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOZDGEJT-ssoe25tmA1ex_ZUuACugzuwikQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="i-do-name">
                <h4>Vanilla JavaScript</h4>
              </div>
              <div className="i-do-desc">
                <p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </p>
              </div>
            </Col>
          {/* </Space> */}
        </Row>
      </Row>
    </>
  );
};

export default WhatIDo;
