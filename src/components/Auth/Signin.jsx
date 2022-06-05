import { Button, Form, Input, notification } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../../api/auth";
import "./Signin.css";
const Signin = () => {
    const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const { data } = await signin(values);
      localStorage.setItem("user", JSON.stringify(data));
      return navigate('/admin')
    } catch (err){
        notification.error({
            message: `${err.response.data.msg}`
        })
    }
  };

  return (
    <div className="container-signin">
      <div className="form-signin">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <h1 className="flex justify-center title-signin">Sign-in</h1>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" className="btn-success" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
