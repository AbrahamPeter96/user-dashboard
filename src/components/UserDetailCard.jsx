import React, { useContext, useCallback } from "react";
import { Col, Row, Typography, Card } from "antd";
const { Title } = Typography;
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const UserDetailCard = ({ ctx, setIsEdit }) => {
  const navigate = useNavigate();

  return (
    <div className="items-center" style={{ background: "grey" }}>
      {" "}
      <Card
        title="User Detail"
        bordered={false}
        style={{
          width: 500,
        }}
        extra={
          <div style={{ gap: "20px ", display: "flex" }}>
            <EditOutlined onClick={() => setIsEdit(true)} />
            <DeleteFilled
              onClick={() => {
                ctx.removeSingleUser(ctx.user.id);
                navigate("/");
              }}
            />
          </div>
        }
      >
        <Row gutter={16}>
          <Col span={12}>
            <div>
              <Title level={5}>First Name:</Title>
              <Typography>{ctx?.user?.firstName}</Typography>
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <Title level={5}>Last Name:</Title>
            <Typography>{ctx?.user?.lastName}</Typography>
          </Col>
        </Row>
        <div class="mt-3">
          <Row gutter={16}>
            <Col span={12}>
              <div>
                <Title level={5}>Gender:</Title>
                <Typography>{ctx?.user?.gender}</Typography>
              </div>
            </Col>
            <Col span={12}>
              {" "}
              <Title level={5}>Phone Number:</Title>
              <Typography>{ctx?.user?.phone}</Typography>
            </Col>
          </Row>
        </div>
        <div class="mt-3">
          <Row gutter={16}>
            <Col span={12}>
              <div>
                <Title level={5}>Birthday:</Title>
                <Typography>{ctx.user.birthDate}</Typography>
              </div>
            </Col>
            <Col span={12}>
              {" "}
              <Title level={5}>Email:</Title>
              <Typography>{ctx.user.email}</Typography>
            </Col>
          </Row>
        </div>
        <div class="mt-3">
          <Row gutter={16}>
            <Col span={12}>
              <div>
                <Title level={5}>Univeristy:</Title>
                <Typography>{ctx?.user?.university}</Typography>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};
export default UserDetailCard;
