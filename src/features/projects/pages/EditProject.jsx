import React, { useEffect } from "react";
import { Form, Input, Button, Row, Select, Upload, notification } from "antd";
import { Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./AddProduct.css";
import { useDispatch } from "react-redux";
import { updateProject } from "../projectSlice";
import instance from "../../../api/instance";
import { useParams } from "react-router-dom";


const { Title } = Typography;

const EditProject = (props) => {
  const dispath = useDispatch();
  const [form] = Form.useForm();
  const {id} = useParams()
  useEffect(() => {
    const getProject = async () => {
      const { data } =  await instance.get(`/projects/${id}`);
      form.setFieldsValue(data)
    };
    getProject();
  }, []);
  const onFinish = (project) => {
    dispath(updateProject({_id: id, ...project}));
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
        <Title level={2}>Fill add project</Title>
      </Row>
      <Form
        name="basic"
        labelCol={{ span: 8, offset: 4 }}
        wrapperCol={{ span: 16, offset: 4 }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
        className="form-add-product"
      >
        <Form.Item
          label="Name project"
          name="name"
          rules={[
            { required: true, message: "Please input your name project!" },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Authenticate"
          name="auth"
          rules={[{ required: true, message: "Please input your auth!" }]}
        >
          <Input placeholder="Authenticate" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your Description!" },
          ]}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item
          label="Images"
          name="images"
          rules={[{ required: true, message: "Please input your images!" }]}
        >
          <Input placeholder="http://images" />
        </Form.Item>

        <Form.Item
          label="Link Preview"
          name="linkPreview"
          rules={[
            { required: true, message: "Please input your link preview!" },
          ]}
        >
          <Input placeholder="http://..." />
        </Form.Item>

        <Form.Item
          label="Link Source"
          name="linkSource"
          rules={[
            { required: true, message: "Please input your link source!" },
          ]}
        >
          <Input placeholder="http://..." />
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

export default EditProject;
