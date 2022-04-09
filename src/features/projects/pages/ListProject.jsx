import { Button, Modal, Row, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getListProject, removeProject } from "../projectSlice";

const ListProjects = (props) => {
  const projects = useSelector((state) => state.project.value);
  const dispath = useDispatch();
  console.log(projects);
  useEffect(() => {
    dispath(getListProject());
  }, []);


  const handleRemove = (id) => {
    Modal.confirm({
      title: "Thông báo",
      content: "Bạn có chắc muốn xóa",
      onOk: () => dispath(removeProject(id))
    })
    
  }
  const columns = [
    {
      title: "Name Project",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Authenticate",
      className: "column-money",
      dataIndex: "auth",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Link Preview",
      dataIndex: "linkPreview",
    },
    {
      title: "Link Source",
      dataIndex: "linkSource",
    },
    {
      title: "Imgages",
      dataIndex: "images",
    },
    {
      title: "Action",
      dataIndex: "_id",
      align: "right",
      render: (id) => (
        <Row className="flex gap-2 justify-end">
          <Link to={`/admin/projects/${id}/edit`}>
            <Button type="primary" icon={<EditOutlined />}></Button>
          </Link>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleRemove(id)}
          ></Button>
        </Row>
      ),
    },
  ];

  return (
    <>
      <Row className="mb-3">
        <Link to="/admin/projects/add">
          <Button type="primary">Add Product</Button>
        </Link>
      </Row>
      <Table
        columns={columns}
        dataSource={projects}
        bordered
        title={() => (
          <Typography.Title level={3}>List Products</Typography.Title>
        )}
        pagination={{
          total: projects.lenght,
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 6, 7]
        }}
      />
    </>
  );
};

export default ListProjects;
