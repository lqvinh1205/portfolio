import { Col, Row, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedProject.scss";
const FeaturedProject = () => {
  return (
    <Row className="featured mt-10">
      <Col span={24}>
        <div className="featured-title">
          <h1>Featured Project</h1>
        </div>
      </Col>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className="featured-items">
            <div className="featured-items-img">
              <img
                src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1649359926/car/Screenshot_2022-04-08_023104_ddtvzt.png"
                alt=""
              />
            </div>
            <div className="featured-items-details">
              <div className="featured-items-name">
                <h2>Amazon Pages</h2>
              </div>
              <div className="featured-items-desc">
                <p>
                  Short description of the client and project requirements.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="featured-items-by">
                <span>by. Quang Vinh</span>
              </div>
            </div>
            <div className="featured-items-btn-middle">
              <Link to="/" className="featured-items-btn-prev">
                <button>Preview</button>
              </Link>
              <Link to="/" className="featured-items-btn-source">
                <button>Source</button>
              </Link>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="featured-items">
            <div className="featured-items-img">
              <img
                src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1649359926/car/Screenshot_2022-04-08_023104_ddtvzt.png"
                alt=""
              />
            </div>
            <div className="featured-items-details">
              <div className="featured-items-name">
                <h2>Amazon Pages</h2>
              </div>
              <div className="featured-items-desc">
                <p>
                  Short description of the client and project requirements.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="featured-items-by">
                <span>by. Quang Vinh</span>
              </div>
            </div>
            <div className="featured-items-btn-middle">
              <Link to="/" className="featured-items-btn-prev">
                <button>Preview</button>
              </Link>
              <Link to="/" className="featured-items-btn-source">
                <button>Source</button>
              </Link>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="featured-items">
            <div className="featured-items-img">
              <img
                src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1649359926/car/Screenshot_2022-04-08_023104_ddtvzt.png"
                alt=""
              />
            </div>
            <div className="featured-items-details">
              <div className="featured-items-name">
                <h2>Amazon Pages</h2>
              </div>
              <div className="featured-items-desc">
                <p>
                  Short description of the client and project requirements.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="featured-items-by">
                <span>by. Quang Vinh</span>
              </div>
            </div>
            <div className="featured-items-btn-middle">
              <Link to="/" className="featured-items-btn-prev">
                <button>Preview</button>
              </Link>
              <Link to="/" className="featured-items-btn-source">
                <button>Source</button>
              </Link>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="featured-items">
            <div className="featured-items-img">
              <img
                src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1649359926/car/Screenshot_2022-04-08_023104_ddtvzt.png"
                alt=""
              />
            </div>
            <div className="featured-items-details">
              <div className="featured-items-name">
                <h2>Amazon Pages</h2>
              </div>
              <div className="featured-items-desc">
                <p>
                  Short description of the client and project requirements.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="featured-items-by">
                <span>by. Quang Vinh</span>
              </div>
            </div>
            <div className="featured-items-btn-middle">
              <Link to="/" className="featured-items-btn-prev">
                <button>Preview</button>
              </Link>
              <Link to="/" className="featured-items-btn-source">
                <button>Source</button>
              </Link>
            </div>
          </div>
        </Col>
     
      </Row>
    </Row>
  );
};

export default FeaturedProject;
