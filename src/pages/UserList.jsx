import React, { useContext, useCallback } from "react";
import { Col, Row, Typography, Input, Table, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title } = Typography;
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { UserContext } from "../Contexts/UsersContext";
import { useEffect } from "react";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (data, record) => (
      <Link
        to={`/user-detail/${record.id}`}
      >{`${record.firstName} ${record.lastName}`}</Link>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
];

export default function UserList() {
  const ctx = useContext(UserContext);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (e) => {
    const search = e.target.value;
    ctx.serchUsers(search);
  };
  const optimisedVersion = useCallback(debounce(handleChange), []);

  return (
    <>
      {ctx.isLoading ? (
        <div className="items-center">
          <Spin size="large" />
        </div>
      ) : (
        <Container fluid className="mt-2">
          <Row gutter={16}>
            <Col span={12}>
              <Title>User List</Title>
            </Col>
            <Col span={12}>
              <Input
                placeholder="Search..."
                onChange={optimisedVersion}
                prefix={<SearchOutlined />}
              />
            </Col>
          </Row>
          <Col span={24}>
            <Table columns={columns} dataSource={ctx.users.users} />
          </Col>
        </Container>
      )}
    </>
  );
}
