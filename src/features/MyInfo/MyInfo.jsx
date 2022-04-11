import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Upload,
  notification,
  Image,
  Modal,
} from "antd";
import { Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { read, update } from "../../api/myInfo";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";

const { Title } = Typography;
const MyInfo = () => {
  const [fileList, setFileList] = useState();
  const [imageCurrent, setImageCurrent] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const getProject = async () => {
      const { data } = await read();
      setImageCurrent(data.images);
      form.setFieldsValue(data);
    };
    getProject();
  }, []);

  const onFinish = async (info) => {
    Modal.confirm({
      title: "Thông báo",
      content: "Bạn có chắc muốn xóa",
      onOk: async () => {
        const images = await handleUpload();
        await update({ ...info, images: images.url });
        setImageCurrent(images.url || imageCurrent);
        notification.success({
          message: "Thông báo!",
          description: "Update my infomation success!",
        });
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
        <Title level={2}>Edit my infomation</Title>
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
      >
        <Form.Item
          label="My name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input your age!" }]}
        >
          <Input placeholder="Age" />
        </Form.Item>

        <Form.Item
          label="Quickly Infomation"
          name="infoQuickly"
          rules={[
            {
              required: true,
              message: "Please input your Quickly Description!",
            },
          ]}
        >
          <Input placeholder="Quickly Infomation" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Sub Description"
          name="subDescription"
          rules={[
            { required: true, message: "Please input your link preview!" },
          ]}
        >
          <Input placeholder="Sub description" />
        </Form.Item>

        <Form.Item
          label="I can do"
          name="iCanDo"
          rules={[{ required: true, message: "Please input your iCanDo!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Images Current">
          <Image src={imageCurrent} />
        </Form.Item>
        <Form.Item
          label="Upload images change"
          rules={[{ required: true, message: "Please input your images!" }]}
        >
          <Upload
            listType="picture"
            beforeUpload={() => false}
            onChange={({ file }) => setFileList(file)}
            maxCount={1}
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

export default MyInfo;
