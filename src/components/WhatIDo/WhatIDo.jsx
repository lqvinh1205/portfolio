import { Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListSkill } from "../../features/skills/skillSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import "./WhatIDo.css";

import "swiper/css/grid";

// Import Swiper styles
import "swiper/css";

const WhatIDo = (props) => {
  const skills = useSelector((state) => state.skill.value);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getListSkill());
  }, []);
  console.log("skills ", skills);
  return (
    props.info && (
      <>
        <Row className="i-do" id="i-do">
          <Col span={24}>
            <div className="i-do-title">
              <h1>Những thứ tôi biết</h1>
            </div>
            <div className="i-do-sub-desc">
              <p>{props.info.iCanDo}</p>
            </div>
          </Col>
          <div style={{ width: "100%" }}>
            <Swiper
              module={[Grid]}
              effect={"coverflow"}
              slidesPerView={1}
              draggable={false}
              simulateTouch={false}
              breakpoints={{
                425: {
                  slidesPerView: 3,
                  grid: { rows: 2 },
                },
                769: {
                  slidesPerView: 4,
                  grid: { rows: 2 },
                },
              }}
            >
              {skills.map((item, index) => {
                return (
                  <SwiperSlide>
                    <Col span={24} className="i-do-items">
                      <div className="i-do-img">
                        {item.images.map((images) => {
                          return <img src={images} alt="" key={index} />;
                        })}
                      </div>
                      <div className="i-do-name w-100">
                        <h4>{item.name}</h4>
                      </div>
                      <div className="i-do-desc">
                        <p>{item.description}</p>
                      </div>
                    </Col>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Row>
      </>
    )
  );
};

export default WhatIDo;
