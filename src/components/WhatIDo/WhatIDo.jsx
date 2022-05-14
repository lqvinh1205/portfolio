import { Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListSkill } from "../../features/skills/skillSlice";
import "./WhatIDo.css";
const WhatIDo = (props) => {
  const skills = useSelector((state) => state.skill.value);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getListSkill());
  }, []);
  console.log('skills ' ,skills);
  return (
    props.info && (
      <>
        <Row className="i-do">
          <Col span={24}>
            <div className="i-do-title">
              <h1>Những thứ tôi biết</h1>
            </div>
            <div className="i-do-sub-desc">
              <p>{props.info.iCanDo}</p>
            </div>
          </Col>
          <Row gutter={[20, 40]}>
            {skills.map((item, index) => {
              return (
                <Col xs={24} sm={24} md={8} lg={6} xl={6} key={index}>
                  <div className="i-do-img">
                    {item.images.map((images) => {
                      return(
                        <img
                          src={images}
                          alt=""
                          key={index}
                        />
                      )
                    })}
                  </div>
                  <div className="i-do-name w-100">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="i-do-desc">
                    <p>
                    {item.description}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Row>
      </>
    )
  );
};

export default WhatIDo;
