import { EyeOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListProject } from "../../features/projects/projectSlice";
import "./FeaturedProject.scss";
const FeaturedProject = () => {
  const projects = useSelector((state) => state.project.value);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getListProject());
  }, []);
  return (
    <Row className="featured mt-10" id="featured">
      <Col span={24}>
        <div className="featured-title">
          <h1>Featured Project</h1>
        </div>
      </Col>

      <Row gutter={[16, 16]}>
        {projects.map((item, index) => {
          return (
            <Col xs={24} sm={24} md={12} lg={12} key={index}>
              <div className="featured-items">
                <div className="featured-items-content">
                  <div className="featured-items-img">
                    <img
                      src={item.images}
                      alt=""
                    />
                  </div>
                  <div className="featured-items-details">
                    <div className="featured-items-name">
                      <h2>{item.name}</h2>
                    </div>
                    <div className="featured-items-desc">
                      <p>
                        {item.description}
                      </p>
                    </div>
                    <div className="featured-items-by">
                      <span>by. {item.auth}</span>
                    </div>
                  </div>
                </div>
                <div className="featured-items-btn-middle">
                  <a
                    href={item.linkPreview}
                    className="featured-items-btn-prev"
                  >
                    <button>
                      <EyeOutlined />
                      Preview
                    </button>
                  </a>
                  <a
                    href={item.linkSource}
                    className="featured-items-btn-source"
                  >
                    <button>
                      <FolderOpenOutlined />
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </Col>
          );
        })}
        {}
      </Row>
    </Row>
  );
};

export default FeaturedProject;
