import React, { useState, useEffect, createContext } from "react";
import {
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  searchUsers,
} from "./api";
import { notification } from "antd";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  async function getAllUsers() {
    setIsLoading(true);
    try {
      const usersResponse = await getAllUser();
      setUsers(usersResponse);
    } catch (e) {
      notification.error({
        description: e.message,
      });
    }
    setIsLoading(false);
  }

  async function getSingleUser(id) {
    setIsLoading(true);
    try {
      const userResponse = await getUser(id);
      setUser(userResponse);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateSingleUser(user) {
    setIsLoading(true);
    try {
      const userResponse = await updateUser(user);
      setUser(userResponse);
      notification.success({
        description: "User updated successfully.",
      });
    } catch (error) {
      setError(error.message);
      notification.error({
        description: "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function removeSingleUser(id) {
    setIsLoading(true);
    try {
      const userResponse = await deleteUser(id);
      setUser({});
      notification.success({
        description: "User delete successfully.",
      });
    } catch (error) {
      setError(error.message);
      notification.success({
        description: "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function serchUsers(word) {
    try {
      const usersResponse = await searchUsers(word);
      setUsers(usersResponse);
    } catch (e) {
      notification.error({
        description: e.message,
      });
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        users,
        user,
        error,
        getAllUsers,
        getSingleUser,
        updateSingleUser,
        removeSingleUser,
        serchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
