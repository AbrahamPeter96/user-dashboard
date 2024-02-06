import React, { useState, useEffect, useContext } from "react";
import { Card, Col, Row, Typography, Input, Button } from "antd";
import { UserContext } from "../Contexts/UsersContext";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Title } = Typography;

function EditCard({ data, setIsEdit }) {
  let [form, setForm] = useState({});

  const ctx = useContext(UserContext);
  console.log(ctx);

  useEffect(() => setForm(data), []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = () => {
    ctx.updateSingleUser(form);
    setIsEdit(false);
  };
  return (
    <div className="items-center" style={{ background: "grey" }}>
      <Card
        title="Edit User"
        bordered={false}
        style={{
          width: 500,
        }}
        extra={<ArrowLeftOutlined onClick={() => setIsEdit(false)} />}
      >
        <Row gutter={16}>
          <Col span={12}>
            <div>
              <Title level={5}>First Name:</Title>
              <Input
                name={"firstName"}
                value={form.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Title level={5}>Last Name:</Title>
              <Input
                name={"lastName"}
                value={form.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </Col>
        </Row>
        <div class="mt-3">
          <Row gutter={16}>
            <Col span={12}>
              <div>
                <Title level={5}>Gender:</Title>
                <Input
                  name={"gender"}
                  value={form.gender}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </Col>
            <Col span={12}>
              {" "}
              <Title level={5}>Phone Number:</Title>
              <Input
                name={"phone"}
                value={form.phone}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Row>
        </div>
        <div class="mt-3">
          <Row gutter={16}>
            <Col span={12}>
              <div>
                <Title level={5}>Birthday:</Title>
                <Input
                  name={"birthDate"}
                  value={form.birthDate}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </Col>
            <Col span={12}>
              {" "}
              <Title level={5}>Email:</Title>
              <Input
                name={"email"}
                value={form.email}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Row>
        </div>
        <div class="mt-3">
          <Row gutter={16}>
            <Col span={12}>
              <div>
                <Title level={5}>Univeristy:</Title>
                <Input
                  name={"university"}
                  value={form.university}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div class="mt-3">
          <Col span={24}>
            <Button type="primary" disabled={ctx?.isLoading} onClick={onSubmit}>
              {ctx?.isLoading ? "Saving" : "Save"}
            </Button>
          </Col>
        </div>
      </Card>
    </div>
  );
}
export default EditCard;
