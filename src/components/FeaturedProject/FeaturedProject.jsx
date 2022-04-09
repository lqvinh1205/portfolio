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
  console.log(projects);
  return (
    <Row className="featured mt-10">
      <Col span={24}>
        <div className="featured-title">
          <h1>Featured Project</h1>
        </div>
      </Col>

      <Row gutter={[16, 16]}>
        {projects.map((item, index) => {
          return (
            <Col span={12} key={index}>
              <div className="featured-items">
                <div className="featured-items-content">
                  <div className="featured-items-img">
                    <img
                      src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1649359926/car/Screenshot_2022-04-08_023104_ddtvzt.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-items-details">
                    <div className="featured-items-name">
                      <h2>{item.name}</h2>
                    </div>
                    <div className="featured-items-desc">
                      <p>
                        Short description of the client and project
                        requirements. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean commodo ligula eget dolor.
                      </p>
                    </div>
                    <div className="featured-items-by">
                      <span>by. Quang Vinh</span>
                    </div>
                  </div>
                </div>
                <div className="featured-items-btn-middle">
                  <Link
                    to={item.linkPreview}
                    className="featured-items-btn-prev"
                  >
                    <button>
                      <EyeOutlined />
                      Preview
                    </button>
                  </Link>
                  <Link
                    to={item.linkSource}
                    className="featured-items-btn-source"
                  >
                    <button>
                      <FolderOpenOutlined />
                      Source
                    </button>
                  </Link>
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
