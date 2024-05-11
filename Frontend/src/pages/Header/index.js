import React, { useState } from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from "../../images/home/Pinna-removebg-preview.png";

const { Header } = Layout;

const AppHeader = () => {
  const [activeMenu, setActiveMenu] = useState('home'); // State to track active menu item

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#EAE2F8', padding: '0 10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Make the logo larger */}
        <img src={logo} alt="Pinnacle Arcade Logo" style={{ width: '100px', marginRight: '20px' }} />
        {/* Add CSS for increased spacing between menu items */}
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 230 }}>
            <li style={{ marginRight: '80px' }}>
              <a href="#home" onClick={() => handleClick('home')} style={{ color: activeMenu === 'home' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Home</a>
            </li>
            <li style={{ marginRight: '80px' }}>
              <a href="#shopping" onClick={() => handleClick('shopping')} style={{ color: activeMenu === 'shopping' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Shopping</a>
            </li>
            <li style={{ marginRight: '80px' }}>
              <a href="#events" onClick={() => handleClick('events')} style={{ color: activeMenu === 'events' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Events</a>
            </li>
            <li style={{ marginRight: '80px' }}>
              <a href="#packages" onClick={() => handleClick('packages')} style={{ color: activeMenu === 'packages' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Packages</a>
            </li>
            <li style={{ marginRight: '80px' }}>
              <a href="#community" onClick={() => handleClick('community')} style={{ color: activeMenu === 'community' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Community</a>
            </li>
            <li style={{ marginRight: '80px' }}>
             <a href="#Feedback" onClick={() => handleClick('Feedback')} style={{ color: activeMenu === 'Feedback' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Feedback</a>
            </li>
    
          </ul>
        </nav>
      </div>
      <Avatar style={{ backgroundColor: '#ccc', color: '#000' }} icon={<UserOutlined />} />
    </Header>
  );
};

export default AppHeader;
