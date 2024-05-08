import React, { useState } from 'react';
import { Input, Button, Row, Col, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AppFooter from '../Footer';
import AppHeader from '../Header';

import ZaraLogo from '../../images/storeDirectoryImg/clothes/zara.jpeg';
import HMLogo from '../../images/storeDirectoryImg/clothes/h&m.jpeg';
import FasionHouseLogo from '../../images/storeDirectoryImg/clothes/fasionhouse.jpeg';
import DotsLinesLogo from '../../images/storeDirectoryImg/clothes/dots and line.jpeg';
import LadyLogo from '../../images/storeDirectoryImg/clothes/lady.jpeg';
import ZartheLogo from '../../images/storeDirectoryImg/clothes/zarthe.jpg';

const AddProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    

    const levels = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];
    const products = [
        { name: "Zara", logo: ZaraLogo },
        { name: "H&M", logo: HMLogo },
        { name: "Fashion House", logo: FasionHouseLogo },
        { name: "Dots & Lines", logo: DotsLinesLogo },
        { name: "Lady", logo: LadyLogo },
        { name: "Zarthe", logo: ZartheLogo }
    ];

   

    return (
        <div>
             <AppHeader />
        <div style={{ padding: '20px', background: '#fff' }}>
            <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '30px', fontFamily: '"Times New Roman", Times, serif' }}>Add Products</h2>
            <div style={{ background: '#E6E6FA', padding: '20px', textAlign: 'center', width: '70%', margin: 'auto', height: '100px' }}>
                <h3 style={{ color: '#5e2a84', fontFamily: '"Times New Roman", Times, serif', fontSize: '24px', padding: '10px' }}>Choose level Here</h3>
                <div>
                    {levels.map(level => (
                        <Button
                            key={level}
                            style={{
                                margin: '5px',
                                backgroundColor: '#5e2a84',
                                color: '#fff',
                                borderColor: '#5e2a84'
                            }}
                           
                        >
                            {level}
                        </Button>
                    ))}
                </div>
            </div>
            <Input
                placeholder="Search items"
                prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
                style={{
                    width: '500px',
                    borderRadius: '19px',
                    margin: '20px auto 30px auto',
                    display: 'flex',
                    backgroundColor: '#E6E6FA'
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <h3 style={{ textAlign: 'center', color: '#5e2a84', fontSize: '20px', fontFamily: '"Times New Roman", Times, serif' }}>Level 2- Clothing</h3>
            <Row gutter={[16, 16]} style={{ maxWidth: 800, margin: '0 auto' }}> {/* Reduced gutter size for closer cards */}
                {products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={8}>
                        <Card
                            hoverable
                            style={{ width: '100%', textAlign: 'center', margin: '0 auto' }} // Adjusted card width to 100%
                            cover={<img alt={product.name} src={product.logo} style={{ width: 'auto', height: 80, margin: '0 auto' }} />}
                        >
                            <Card.Meta title={product.name} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        <AppFooter />
        </div>
    );
};

export default AddProductsPage;
