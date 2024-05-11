import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Card,
  Button,
  Row,
  Col,
  Typography,
  Modal,
  Form,
  Input,
} from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  TeamOutlined,
  EditOutlined,
  DeleteOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
//import 'antd/dist/antd.css';
import {
  GetLoggedInUserDetails,
  editUser,
  deleteUser,
} from "../../apicalls/users";

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

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
        setUserData(values);
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
    console.log(password);
    try {
      const response = await deleteUser({ email, password });
      if (response.success) {
        console.log("User data deleted successfully:");
        // remove token from localstorage
        localStorage.removeItem("token");
        // redirect to login page
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
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Add Products
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Shopping List
          </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            Update Profile
          </Menu.Item>
          <Menu.Item key="5" icon={<TeamOutlined />}>
            Membership
          </Menu.Item>
          <Menu.Item key="6" icon={<EditOutlined />}>
            My Reviews
          </Menu.Item>
          <Menu.Item key="7" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "0 16px" }}>
          <Row gutter={16}>
            <Col span={24}>
              <Card title="User Details" bordered={false}>
                <p>
                  <Text strong>Username:</Text> {userData?.name}
                </p>
                <p>
                  <Text strong>Email:</Text> {userData?.email}
                </p>
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={showEditModal}
                  style={{ marginRight: 8 }}
                >
                  Edit
                </Button>
                <Button
                  type="primary"
                  icon={<DeleteOutlined />}
                  onClick={showDeletModal}
                  danger
                >
                  Delete
                </Button>
              </Card>
            </Col>
          </Row>
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
            label="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input />
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
