import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Select,
  Upload,
  notification,
} from "antd";
import { FormInstance } from "antd/es/form";
import { Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./Skill.css";
import { useDispatch } from "react-redux";
import { createSkill } from "../skillSlice";

const { Title } = Typography;

const AddSkill = (props) => {
  const dispath = useDispatch();
  const onFinish = (skill) => {
    console.log("page add skill: ", skill);
    dispath(createSkill(skill));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <>
      <Row className="flex justify-center">
        <Title level={2}>Fill add Skill</Title>
      </Row>
      <Form
        name="basic"
        labelCol={{ span: 8, offset: 4 }}
        wrapperCol={{ span: 16, offset: 4 }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form-add-product"
      >
        <Form.Item
          label="Name skill"
          name="name"
          rules={[
            { required: true, message: "Please input your name skill!" },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Description skill"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="images"
          label="Upload"
          getValueFromEvent={normFile}
          extra=""
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddSkill;
