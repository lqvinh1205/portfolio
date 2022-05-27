import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListSkill } from "../../features/skills/skillSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, EffectCube, Autoplay } from "swiper";
import "./WhatIDo.css";

// Import Swiper styles
import "swiper/css/effect-cube";
import "swiper/css";
import "swiper/css/grid";

const WhatIDo = (props) => {
  const skills = useSelector((state) => state.skill.value);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getListSkill());
  }, []);
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 425px)');
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
              effect={`${mobile.matches ? "cube" : "slide"}`}
              loop={ mobile.matches } 
              modules={[Grid, EffectCube, Autoplay]}
              autoplay={ {
                delay: 3000,
              }}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              breakpoints={{
                425: {
                  allowTouchMove: false,
                  slidesPerView: 3,
                  grid: { rows: 2, fill: "row"},
                },
                769: {
                  allowTouchMove: false,
                  slidesPerView: 4,
                  grid: { rows: 2, fill: "row"},
                },
              }}
            >
              {skills.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Col span={24} className="i-do-items">
                      <div className="i-do-img">
                        {item.images.map((images) => {
                          return <img src={images} alt="" />;
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
