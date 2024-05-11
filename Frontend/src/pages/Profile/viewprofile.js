import React, { useState, useEffect } from "react";
import {
  Layout, Menu, Card, Button, Row, Col, Typography, Modal, Form, Input, Select, Upload, Avatar,
} from "antd";
import {
  PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined, TeamOutlined, EditOutlined,
  DeleteOutlined, LogoutOutlined, UploadOutlined, UserOutlined,
} from "@ant-design/icons";
import { GetLoggedInUserDetails, editUser, deleteUser } from "../../apicalls/users";
import AppFooter from '../Footer';
import AppHeader from '../Header';

const { Header, Content, Sider } = Layout;
const { Text } = Typography;
const { Option } = Select;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await GetLoggedInUserDetails();
        if (response.success) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    getUserData();
  }, []);

  const showEditModal = () => {
    setIsModalVisible(true);
  };

  const handleEditUser = async (values) => {
    console.log("Updated Data", values);

    try {
      const response = await editUser(values);
      if (response.success) {
        console.log("User data updated successfully:", response.data);
        setUserData(response.data); // Assuming the API returns the updated user data
      }
    } catch (err) {
      console.error("Failed to update user data:", err);
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showDeletModal = () => {
    setIsDeleteModalVisible(true);
  };

  const handleDeletCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteUser = async (values) => {
    console.log("User deleted");
    const { password } = values;
    const { email } = userData;
    try {
      const response = await deleteUser({ email, password });
      if (response.success) {
        console.log("User data deleted successfully:");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          style={{
            height: "32px",
            background: "rgba(255, 255, 255, 0.2)",
            margin: "16px",
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={["4"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>Shopping List</Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>Update Profile</Menu.Item>
          <Menu.Item key="5" icon={<TeamOutlined />}>Membership</Menu.Item>
          <Menu.Item key="6" icon={<EditOutlined />}>My Reviews</Menu.Item>
          <Menu.Item key="7" icon={<LogoutOutlined />}>Logout</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <AppHeader />
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: '0 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 134px)' }}>
          <Card
            title={<div style={{ fontSize: '24px', color: '#1890ff' }}>User Details</div>}
            bordered={false}
            style={{
              width: '100%',
              maxWidth: '600px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px'
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <Avatar size={64} icon={<UserOutlined />} style={{ backgroundColor: '#1890ff', marginBottom: '10px' }} />
            </div>
            <p><Text strong>Username:</Text> {userData?.name}</p>
            <p><Text strong>Email:</Text> {userData?.email}</p>
            <p><Text strong>Phone:</Text> {userData?.phone}</p>
            <p><Text strong>Age:</Text> {userData?.age}</p>
            <p><Text strong>Gender:</Text> {userData?.gender}</p>
            <p><Text strong>City:</Text> {userData?.city}</p>

            <div style={{ marginTop: '20px' }}>
              <Button type="primary" icon={<EditOutlined />} onClick={showEditModal} style={{ marginRight: 8 }}>
                Edit
              </Button>
              <Button type="primary" icon={<DeleteOutlined />} onClick={showDeletModal} danger>
                Delete
              </Button>
            </div>
          </Card>
        </Content>
      </Layout>


      <Modal
        title="Edit User Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={userData}
          onFinish={handleEditUser}
        >
          <Form.Item
            name="name"
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
          >
            <Select placeholder="Select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="profilePic"
            label="Profile Picture"
            valuePropName="fileList"
          >
            <Upload name="profilePic" action="/upload" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Enter your password"
        visible={isDeleteModalVisible}
        onCancel={handleDeletCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleDeleteUser}>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" danger>
              Delete Account
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default AppLayout;
