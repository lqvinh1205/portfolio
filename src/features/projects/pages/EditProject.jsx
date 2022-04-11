import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Select,
  Upload,
  notification,
  Modal,
  message,
  Image,
} from "antd";
import { Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./AddProduct.css";
import { useDispatch } from "react-redux";
import { updateProject } from "../projectSlice";
import instance from "../../../api/instance";
import { useParams } from "react-router-dom";
import axios from "axios";

const { Title } = Typography;

const EditProject = (props) => {
  const [fileList, setFileList] = useState();
  const [imageCurrent, setImageCurrent] = useState("");
  const dispath = useDispatch();
  const [form] = Form.useForm();
  const { id } = useParams();
  useEffect(() => {
    const getProject = async () => {
      const { data } = await instance.get(`/projects/${id}`);
      setImageCurrent(data.images);
      form.setFieldsValue(data);
    };
    getProject();
  }, []);
  const onFinish = (project) => {
    Modal.confirm({
      title: "Thông báo",
      content: "Bạn có chắc muốn cập nhật",
      onOk: async () => {
        const images = await handleUpload();
        dispath(
          updateProject({
            _id: id,
            images: images.url || imageCurrent,
            ...project,
          })
        ).then(() => {
          notification.success({ message: "Cập nhật thành công" });
          setImageCurrent(images.url)
        })
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", fileList);
    formData.append("upload_preset", "portfolio");
    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dzroyn2i4/image/upload",
        formData
      );
      return data;
    } catch (error) {
      return imageCurrent;
    }
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

        <Form.Item label="Images Current">
          <Image src={imageCurrent} />
        </Form.Item>

        <Form.Item label="Upload" extra="">
          <Upload
            listType="picture"
            beforeUpload={() => false}
            maxCount={1}
            onChange={({ file }) => setFileList(file)}
          >
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
