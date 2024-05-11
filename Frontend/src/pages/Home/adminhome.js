import React, { useState } from 'react';
import { Row, Col, Card, Typography, Carousel } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppFooter from '../Footer';
import AppHeader1 from '../Header1';

const { Title } = Typography;

const AdminHome = () => {
  const [searchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <AppHeader1 />
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
              <Card hoverable cover={<img alt="Deal 1" src="https://img.freepik.com/free-photo/gift-boxes-black-friday-concept_23-2148663119.jpg?t=st=1715450871~exp=1715454471~hmac=9426c4bc8f716db8995aec68b8f49f51f991cfd8f70c17ce502bbed5a9eb5ff5&w=996" />}>
                <Card.Meta title="Black Friday"/>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Deal 2" src="https://img.freepik.com/free-vector/flat-polygonal-cyber-monday-background_23-2149095799.jpg?t=st=1715450907~exp=1715454507~hmac=18c938de5f665a9aa85cd86138d885ebaf5ba891835fc364f6bf91ce8ea2ba7c&w=996" />}>
                <Card.Meta title="Cyber Monday" />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable cover={<img alt="Deal 3" src="https://img.freepik.com/free-photo/romantic-black-couple-sitting-restaurant-wearing-elegant-clothes_1157-51941.jpg?t=st=1715451416~exp=1715455016~hmac=c71fdb8442b7c538fb383960f200bbd57b5c1b217548415216d76781b024b4ea&w=996" />}>
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

export default AdminHome;
