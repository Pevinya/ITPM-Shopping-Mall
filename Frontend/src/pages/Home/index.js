import React, { useState } from 'react';
import { Row, Col, Card, Typography, Carousel } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppFooter from '../Footer';
import AppHeader from '../Header';

const { Title } = Typography;

const Home = () => {
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
          <Title level={3}>Deals of the Month</Title>
          <Row gutter={[16, 16]}>
            {/* Replace Card components with your deal of the month cards */}
            <Col span={8}>
              <Card hoverable cover={<img alt="Deal 1" src="https://img.freepik.com/free-photo/black-friday-sale-notebook-black-background_23-2148313039.jpg?t=st=1715433537~exp=1715437137~hmac=c1b38a5f461e50a9e189700d477c6fd0eb39f10172c244bfc2b9e429bebdff17&w=996" />}>
                <Card.Meta title="Black Friday"/>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Deal 2" src="https://img.freepik.com/free-photo/cyber-monday-sale-clock_23-2148669950.jpg?t=st=1715433686~exp=1715437286~hmac=509c5c123e386cb0f27b7ef99dcd5ae35c926cef243d6c6d9a03e5b2fa64466b&w=996" />}>
                <Card.Meta title="Cyber Monday" />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Deal 3" src="https://img.freepik.com/free-photo/cropped-photo-red-roses-gift-box-table-reastaurant_1157-51850.jpg?t=st=1715433877~exp=1715437477~hmac=880621b4009ae41a0a453d7c00cef79422b03532ec5bfcf374d008f7c9aa3f36&w=996" />}>
                <Card.Meta title="Valentine offers" />
              </Card>
            </Col>
          </Row>
          <Title level={3} style={{ marginTop: '20px' }}>Find your favourite store</Title>
          <Row gutter={[16, 16]}>
            {/* Replace Card components with your sales cards */}
            <Col span={8}>
              <Card hoverable cover={<img alt="Accessories" src="https://img.freepik.com/free-photo/elegantly-dressed-woman-makes-handmade-necklaces-working-with-needles-thread-jewelry-workshop_613910-21160.jpg?w=996&t=st=1715433120~exp=1715433720~hmac=0d0b3d1805d2bd546e5ca734d4bf47d5157aa00eab7e4fc0b0386f01ff99bcc0" />}>
                <Card.Meta title="Accessories" />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Homeware" src="https://img.freepik.com/free-photo/view-kitchen-utensils-flatlay_1098-19770.jpg?t=st=1715433325~exp=1715436925~hmac=c97dc89b8b63531b9330c0ba47fce78d39774cfbac87ee631b0f68019f708947&w=996" />}>
                <Card.Meta title="Homeware"/>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Health, Beauty & Wellness" src="https://img.freepik.com/free-photo/woman-spa_329181-13160.jpg?t=st=1715433470~exp=1715437070~hmac=cbf89957a4b87ec905aa2e8ee1448cf13f8a8127d74d6fe74305ddbdedc0f003&w=996" />}>
                <Card.Meta title="Health, Beauty & Wellness"/>
              </Card>
            </Col>
          </Row>
          <Title level={3} style={{ marginTop: '20px' }}>Additional Ads</Title>
          <Carousel autoplay>
            {/* Add your carousel items here */}
            <div>
              <img src="https://img.freepik.com/free-psd/music-listening-banner-page-template_23-2148905329.jpg?w=1060&t=st=1715438637~exp=1715439237~hmac=eaefc3e5cfaacc61ed4962d6b9ab0fc3aef55ae58bd32ecc289dfabf9d74d2a7" alt="Ad 1" style={{ width: '100%' }} />
            </div>
            <div>
              <img src="https://img.freepik.com/free-psd/education-landing-page-template_23-2148941812.jpg?t=st=1715438730~exp=1715442330~hmac=5b879054cd4744a4500fd8f86db4ca9a927b963fcd85c81f65d776593ca810ca&w=1060" alt="Ad 2" style={{ width: '100%' }} />
            </div>
            <div>
              <img src="https://img.freepik.com/free-psd/filmmaker-banner-template-design_23-2149084090.jpg?t=st=1715438796~exp=1715442396~hmac=c58333c2e79041fc5d6763fc99e0e1af13dc9c38903c547d4c9ae429e97357f4&w=1060" alt="Ad 3" style={{ width: '100%' }} />
            </div>
          </Carousel>
        </Col>
      </Row>
      <AppFooter />
    </div>
  );
};

export default Home;
