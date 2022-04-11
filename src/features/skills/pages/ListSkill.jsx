import { Button, Modal, notification, Row, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getListSkill, removeSkill } from "../skillSlice";

const ListSkill = (props) => {
  const skills = useSelector((state) => state.skill.value);
  const dispath = useDispatch();
  console.log(skills);
  useEffect(() => {
    dispath(getListSkill());
  }, []);

  const handleRemove = (id) => {
    Modal.confirm({
      title: "Thông báo",
      content: "Bạn có chắc muốn xóa",
      onOk: () =>
        dispath(removeSkill(id)).then(() =>
          notification.success({ message: "Xóa thành công" })
        ),
    });
  };
  const columns = [
    {
      title: "Name Skill",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Images Skill",
      dataIndex: "image",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Action",
      dataIndex: "_id",
      align: "right",
      render: (id) => (
        <Row className="flex gap-2 justify-end">
          <Link to={`/admin/skills/${id}/edit`}>
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
        <Link to="/admin/skills/add">
          <Button type="primary">Add Skill</Button>
        </Link>
      </Row>
      <Table
        columns={columns}
        dataSource={skills}
        bordered
        title={() => <Typography.Title level={3}>List Skills</Typography.Title>}
        pagination={{
          total: skills.lenght,
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: [5, 6, 7],
        }}
      />
    </>
  );
};

export default ListSkill;
