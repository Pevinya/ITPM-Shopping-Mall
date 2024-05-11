import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users/users-list");
      setUsers(response.data.data);
      console.log("test", response.data.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const showEditModal = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleUpdate = async (values) => {
    try {
      const response = await axios.put(`/api/users/update-details`, {
        email: currentUser.email,
        ...values,
      });
      if (response.data.success) {
        notification.success({ message: "User updated successfully!" });
        fetchUsers();
      } else {
        notification.error({ message: "Failed to update user!" });
      }
    } catch (error) {
      console.error("Failed to update user:", error);
      notification.error({ message: "Failed to update user!" });
    }
    setIsModalVisible(false);
  };

  const handleDelete = async (email) => {
    try {
      const response = await axios.delete(`/api/users/delete-profile`);
      if (response.data.success) {
        notification.success({ message: "User deleted successfully!" });
        fetchUsers();
      } else {
        notification.error({ message: "Failed to delete user!" });
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
      notification.error({ message: "Failed to delete user!" });
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => showEditModal(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.email)}
            danger
            style={{ marginLeft: 8 }}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={users} columns={columns} rowKey="email" />
      <Modal
        title="Edit User"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form initialValues={currentUser} onFinish={handleUpdate}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Role">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
