import React, { useState } from 'react';
import { Input, Row, Col, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AppFooter from '../Footer';
import AppHeader from '../Header';

import unileverLogo from '../../images/storeDirectoryImg/cosmetics/unilever.png';
import belcorpLogo from '../../images/storeDirectoryImg/cosmetics/belcorp.png';
import revlonLogo from '../../images/storeDirectoryImg/cosmetics/revlon.png';
import johnsonLogo from '../../images/storeDirectoryImg/cosmetics/johnson.png';
import sephoraLogo from '../../images/storeDirectoryImg/cosmetics/sephora.jpg';
import hermesLogo from '../../images/storeDirectoryImg/cosmetics/hermes.png';

const StoreDirectory = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredStores, setFilteredStores] = useState([]);

  const stores = [
    { name: "Unilever Beauty Brands", logo: unileverLogo },
    { name: "Belcorp Beauty Brands", logo: belcorpLogo },
    { name: "Revlon Beauty Brands", logo: revlonLogo },
    { name: "Johnson Beauty Brands", logo: johnsonLogo }, 
    { name: "Sephora Beauty Brands", logo: sephoraLogo },
    { name: "Hermes Beauty Brands", logo: hermesLogo }
  ];

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);
    const filtered = stores.filter(store => store.name.toLowerCase().includes(input));
    setFilteredStores(filtered);
  };

  return (
    <div>
      <AppHeader />
      <div style={{ padding: '20px', background: '#fff', textAlign: 'center' }}>
        <p style={{ padding: '10px', color: '#888', marginBottom: '5px', fontSize: '10px' }}> Home &gt; Shopping &gt; Level 4</p>
        <h2 style={{ padding: '10px', color: '#5e2a84', margin: '10px 0 20px 0', fontSize: '30px', fontFamily: '"Times New Roman", Times, serif' }}>Level 04-Cosmetics</h2>
        <Input
          placeholder="Find your favorite store"
          prefix={<SearchOutlined />}
          style={{
            width: '450px',
            marginBottom: '20px',
            borderRadius: '19px',
            padding: '7px 20px',
            border: '1px solid #d9d9d9',
            boxShadow: 'none',
            backgroundColor: '#E6E6FA'  // Light purple background color
          }}
          onChange={handleSearch}
          value={searchInput}
        />

        <Row gutter={[16, 24]} style={{ padding: '10px', maxWidth: 800, margin: '0 auto' }}>
          {searchInput === '' ? stores.map((store, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8}>
              <Card
                hoverable
                style={{ width: '100%', textAlign: 'center' }}
                cover={<img alt={store.name} src={store.logo} style={{ width: 'auto', height: 100, margin: '0 auto' }} />}
              >
                <Card.Meta title={store.name} style={{ padding: '10px 0' }} />
              </Card>
            </Col>
          )) : filteredStores.length > 0 ? filteredStores.map((store, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8}>
              <Card
                hoverable
                style={{ width: '100%', textAlign: 'center' }}
                cover={<img alt={store.name} src={store.logo} style={{ width: 'auto', height: 100, margin: '0 auto' }} />}
              >
                <Card.Meta title={store.name} style={{ padding: '10px 0' }} />
              </Card>
            </Col>
          )) : <p>No output</p>}
        </Row>
      </div>
      <AppFooter />
    </div>
  );
};

export default StoreDirectory;



