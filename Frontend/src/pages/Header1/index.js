import React, { useState } from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from "../../images/home/Pinna-removebg-preview.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate

const { Header } = Layout;

const AppHeader1 = () => {
  const [activeMenu, setActiveMenu] = useState('home'); // State to track active menu item
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  // Function to handle Avatar click
  const handleAvatarClick = () => {
    navigate('/adminDash');  // Navigate to Admin Dashboard path
  };

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#EAE2F8', padding: '0 10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Make the logo larger */}
        <img src={logo} alt="Pinnacle Arcade Logo" style={{ width: '100px', marginRight: '20px' }} />
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, paddingLeft: '20px' }}>
            <li style={{ marginRight: '80px' }}>
              <Link to="/home" onClick={() => handleClick('home')} style={{ color: location.pathname === '/home' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ marginRight: '80px' }}>
              <Link to="/adminAdd" onClick={() => handleClick('shopping')} style={{ color: location.pathname === '/adminAdd' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Shopping</Link>
            </li>
            <li style={{ marginRight: '80px' }}>
              <Link to="/events" onClick={() => handleClick('events')} style={{ color: location.pathname === '/events' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Events</Link>
            </li>
            <li style={{ marginRight: '80px' }}>
              <Link to="/packagesViewUser" onClick={() => handleClick('packagesViewUser')} style={{ color: location.pathname === '/packagesViewUser' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Packages</Link>
            </li>
            <li style={{ marginRight: '80px' }}>
              <Link to="/community" onClick={() => handleClick('community')} style={{ color: location.pathname === '/community' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Community</Link>
            </li>
            <li style={{ marginRight: '80px' }}>
             <Link to="/feedback" onClick={() => handleClick('feedback')} style={{ color: location.pathname === '/feedback' ? '#A875FF' : '#000', fontWeight: 'bold', textDecoration: 'none' }}>Feedback</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Avatar style={{ backgroundColor: '#ccc', cursor: 'pointer' }} icon={<UserOutlined />} onClick={handleAvatarClick} />
    </Header>
  );
};

export default AppHeader1;
