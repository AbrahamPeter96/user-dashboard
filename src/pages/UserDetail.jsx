import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row, Typography, Spin } from "antd";
import { UserContext } from "../Contexts/UsersContext";
import { useParams, useNavigate } from "react-router-dom";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";
import EditCard from "../components/Card";
const { Title } = Typography;
const UserDetail = () => {
  const ctx = useContext(UserContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      ctx.getSingleUser(id);
    };
    fetchData();
  }, []);

  return (
    <>
      {ctx.isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <>
          {isEdit ? (
            <EditCard data={ctx?.user} setIsEdit={setIsEdit} />
          ) : (
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
                    <EditOutlined onClick={() => setIsEdit(!isEdit)} />
                    <DeleteFilled
                      onClick={() => {
                        ctx.removeSingleUser(id);
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
          )}
        </>
      )}
    </>
  );
};

export default UserDetail;
