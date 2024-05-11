import React, { useState } from 'react';
import { Row, Col, Card, Typography, Carousel } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppFooter from '../Footer';
import AppHeader from '../Header';

const { Title } = Typography;

const ViewProductForm = () => {
  const [searchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <AppHeader />
      <Row justify="center" style={{ marginTop: '20px' }}>

      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={16}>
          <Title level={2} style={{ textAlign: 'center', color: 'purple', fontFamily: 'cursive' }}>
            Welcome to Pinnacle Arcade!
          </Title>
          <Title level={3}>Clothes</Title>
          <Row gutter={[16, 16]}>
            {/* Replace Card components with your deal of the month cards */}
            <Col span={8}>
              <Card hoverable cover={<img alt="Deal 1" src="https://www.freepik.com/free-psd/psd-white-hoodie-mockup_51560580.htm#fromView=search&page=1&position=2&uuid=3f83620e-2189-491c-b3c6-0711d59fcc1b" />}>
                <Card.Meta title="Black Friday"/>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Deal 2" src="https://www.freepik.com/free-photo/still-life-rendering-jackets-display_32501103.htm#fromView=search&page=1&position=0&uuid=3f83620e-2189-491c-b3c6-0711d59fcc1b" />}>
                <Card.Meta title="Cyber Monday" />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Deal 3" src="https://www.freepik.com/free-photo/shirt-hanger-with-green-background_39701028.htm#fromView=search&page=1&position=17&uuid=e59b994d-3922-45d4-bbe6-d253398ec93e" />}>
                <Card.Meta title="Valentine offers" />
              </Card>
            </Col>
          </Row>
          <Title level={3} style={{ marginTop: '20px' }}>Find your favourite store</Title>
          <Row gutter={[16, 16]}>
            {/* Replace Card components with your sales cards */}
            <Col span={8}>
              <Card hoverable cover={<img alt="Accessories" src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1715451113~exp=1715454713~hmac=b056defb89bd9605d82efa58d435abd6be9e2f3f2a5dd61c5c5af73abe4fcc89&w=996" />}>
                <Card.Meta title="Accessories" />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Homeware" src="https://img.freepik.com/free-photo/wooden-cutlery-parsley_23-2148678005.jpg?t=st=1715451273~exp=1715454873~hmac=8343a500dbfc14bde55cc82fb7355cc23d109348e7e9d916beb452b85fce74cb&w=996" />}>
                <Card.Meta title="Homeware"/>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Health, Beauty & Wellness" src="https://img.freepik.com/free-photo/beautiful-face-young-pretty-woman-with-healthy-skin-pink-flowers-isolated-white_186202-7584.jpg?t=st=1715451342~exp=1715454942~hmac=fa774e2bba0ccd01bfaec2d8b341883424ad39b479b8ba957b7f997637276c3a&w=826" />}>
                <Card.Meta title="Health, Beauty & Wellness"/>
              </Card>
            </Col>
          </Row>
          <Title level={3} style={{ marginTop: '20px' }}>Additional Ads</Title>
          
        </Col>
      </Row>
      <AppFooter />
    </div>
  );
};

export default ViewProductForm;
