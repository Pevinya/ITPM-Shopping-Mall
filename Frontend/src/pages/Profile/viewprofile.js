import React, { useState } from 'react';
import { Layout, Menu, Card, Button, Row, Col, Typography, Modal, Form, Input } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  TeamOutlined,
  EditOutlined,
  DeleteOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
//import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com"
  });

  const showEditModal = () => {
    setIsModalVisible(true);
  };

  const handleEditUser = (values) => {
    console.log('Updated Data', values);
    setUserData(values);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteUser = () => {
    console.log('User deleted');
    // Implement delete functionality
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px' }} />
        <Menu theme="dark" defaultSelectedKeys={['4']} mode="inline">
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
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '0 16px' }}>
          <Row gutter={16}>
            <Col span={24}>
              <Card title="User Details" bordered={false}>
                <p><Text strong>Username:</Text> {userData.username}</p>
                <p><Text strong>Email:</Text> {userData.email}</p>
                <Button type="primary" icon={<EditOutlined />} onClick={showEditModal} style={{ marginRight: 8 }}>
                  Edit
                </Button>
                <Button type="danger" icon={<DeleteOutlined />} onClick={handleDeleteUser}>
                  Delete
                </Button>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Modal title="Edit User Details" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form
          layout="vertical"
          initialValues={userData}
          onFinish={handleEditUser}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
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
    </Layout>
  );
};

export default AppLayout;
