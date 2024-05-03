import React from 'react';
import { Menu, Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from "../../images/home/pinnacle_logo.png";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#EAE2F8', padding: '0 50px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Make the logo smaller */}
        <img src={logo} alt="Pinnacle Arcade Logo" style={{ width: '70px', marginRight: '20px' }} />
        {/* Add CSS for increased spacing between menu items */}
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ border: 'none', marginLeft: '20px' }}>
          <Menu.Item key="1" style={{ padding: '0 100px' }}>Home</Menu.Item>
          <Menu.Item key="2" style={{ padding: '0 100px' }}>Shopping</Menu.Item>
          <Menu.Item key="3" style={{ padding: '0 100px' }}>Events</Menu.Item>
          <Menu.Item key="4" style={{ padding: '0 100px' }}>Packages</Menu.Item>
          <Menu.Item key="5" style={{ padding: '0 100px' }}>Community</Menu.Item>
        </Menu>
      </div>
      <Avatar style={{ backgroundColor: '#ccc' }} icon={<UserOutlined />} />
    </Header>
  );
};

export default AppHeader;

