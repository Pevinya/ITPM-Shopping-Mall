import React from 'react';
import { Input, Row, Col, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//import 'antd/dist/antd.css';

// Importing images stored in the src folder
import cargillsLogo from '../../images/cargills/cargills.png';
// import healthguardLogo from './path/to/healthguard-logo.png';
// import fireworksLogo from './path/to/fireworks-logo.png';
// import nutsLogo from './path/to/nuts-logo.png';
// import macmartLogo from './path/to/macmart-logo.png';
// import finchLogo from './path/to/finch-logo.png';

const StoreDirectory = () => {
  // Store data with imported images
  const stores = [
    { name: "Cargills Food Hall", logo: cargillsLogo },
    // { name: "Healthguard Pharmacy", logo: healthguardLogo },
    // { name: "Fireworks", logo: fireworksLogo },
    // { name: "Nuts & Murukku", logo: nutsLogo },
    // { name: "Mac Mart", logo: macmartLogo },
    // { name: "Finch Foods", logo: finchLogo }
  ];

  return (
    <div>
      <div style={{ padding: '20px', background: '#f0f2f5', textAlign: 'center' }}>
        <h2>Level 01-Groceries</h2>
        <Input
          placeholder="Find your favorite store"
          prefix={<SearchOutlined />}
          style={{ width: 500, marginBottom: 1 }}    //width-search bar  marginbotton - height between serach bar and cards
        />
      </div>
      <Row gutter={[16, 16]} style={{ padding: 20 }}>
        {stores.map((store, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={<img alt={store.name} src={store.logo} style={{ padding: 2 }} />}
            >
              <Card.Meta title={store.name} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StoreDirectory;
