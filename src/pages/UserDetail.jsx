import React, { useContext, useEffect, useState } from "react";
import { Spin } from "antd";
import { UserContext } from "../Contexts/UsersContext";
import { useParams } from "react-router-dom";
import EditCard from "../components/UserEditCard";
import UserDetailCard from "../components/UserDetailCard";

const UserDetail = () => {
  const ctx = useContext(UserContext);

  const { id } = useParams();

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
        <div className="items-center">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {isEdit ? (
            <EditCard data={ctx} setIsEdit={setIsEdit} />
          ) : (
            <UserDetailCard ctx={ctx} setIsEdit={setIsEdit} />
          )}
        </>
      )}
    </>
  );
};

export default UserDetail;
