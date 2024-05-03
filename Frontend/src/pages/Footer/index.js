import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, PinterestOutlined } from '@ant-design/icons';
//import 'antd/dist/antd.css';

const { Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 50px', flex: 1 }}>
        {/* Content would normally go here */}
      </Content>

      <Footer style={{ textAlign: 'center', backgroundColor: '#EAE2F8', padding: '20px 0' }}>
        <Row justify="space-between" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Col span={6}>
            <Title level={5}>Merchandise</Title>
            <p>T-shirts</p>
            <p>Caps</p>
            <p>Masks</p>
          </Col>
          <Col span={6}>
            <Title level={5}>Franchise</Title>
            <p>Coffee Outlet</p>
            <p>Coffee Vending Machine</p>
            <p>Contact Us</p>
          </Col>
          <Col span={6}>
            <Title level={5}>About Us</Title>
            <p>Promotions</p>
            <p>Customer Care</p>
            <p>Legal Information</p>
            <p>Achievements</p>
            <p>Careers</p>
          </Col>
          <Col span={6}>
            <Title level={5}>Follow Us</Title>
            <InstagramOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
            <FacebookOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
            <TwitterOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
            <PinterestOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
          </Col>
        </Row>
        <div style={{ marginTop: '10px' }}>
          © Filcro All Rights Reserved
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
