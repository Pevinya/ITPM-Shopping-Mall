import React, { useState } from 'react';
import { Input, Button, Row, Col, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppFooter from '../Footer';
import AppHeader from '../Header';

import ZaraLogo from '../../images/storeDirectoryImg/clothes/zara.jpeg';
import HMLogo from '../../images/storeDirectoryImg/clothes/h&m.jpeg';
import FashionHouseLogo from '../../images/storeDirectoryImg/clothes/fasionhouse.jpeg';
import DotsLinesLogo from '../../images/storeDirectoryImg/clothes/dots and line.jpeg';
import LadyLogo from '../../images/storeDirectoryImg/clothes/lady.jpeg';
import ZartheLogo from '../../images/storeDirectoryImg/clothes/zarthe.jpg';

import cargillsLogo from '../../images/storeDirectoryImg/groceries/cargills.png';
import healthguardLogo from '../../images/storeDirectoryImg/groceries/healthgard.jpeg';
import fireworksLogo from '../../images/storeDirectoryImg/groceries/fireworks.jpeg';
import nutsLogo from '../../images/storeDirectoryImg/groceries/nutsandMurukku.jpeg';
import macmartLogo from '../../images/storeDirectoryImg/groceries/mcMart.jpeg';
import finchLogo from '../../images/storeDirectoryImg/groceries/finch.jpeg';

const AddProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('Level 1');
    const navigate = useNavigate();

    const levels = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];
    const allProducts = {
        'Level 1': [
            { id: 1, name: "Cargills Food Hall", logo: cargillsLogo },
            { id: 2, name: "Healthguard Pharmacy", logo: healthguardLogo },
            { id: 3, name: "Fireworks", logo: fireworksLogo },
            { id: 4, name: "Nuts & Murukku", logo: nutsLogo },
            { id: 5, name: "Mac Mart", logo: macmartLogo },
            { id: 6, name: "Finch Foods", logo: finchLogo }
        ],
        'Level 2': [
            { id: 7, name: "Zara", logo: ZaraLogo },
            { id: 8, name: "H&M", logo: HMLogo },
            { id: 9, name: "Fashion House", logo: FashionHouseLogo },
            { id: 10, name: "Dots & Lines", logo: DotsLinesLogo },
            { id: 11, name: "Lady", logo: LadyLogo },
            { id: 12, name: "Zarthe", logo: ZartheLogo }
        ],
        // Add similar arrays for other levels
    };

    const handleLevelClick = (level) => {
        setSelectedLevel(level);
    };

    const handleCardClick = (productName) => {
        navigate(`/show-product/${productName}`);
    };

    return (
        <div>
            <AppHeader />
            <div style={{ padding: '20px', background: '#fff' }}>
                <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '30px', fontFamily: '"Times New Roman", Times, serif' }}>Show Products </h2>
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
                                onClick={() => handleLevelClick(level)}
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
                <h3 style={{ textAlign: 'center', color: '#5e2a84', fontSize: '20px', fontFamily: '"Times New Roman", Times, serif' }}>{selectedLevel}</h3>
                <Row gutter={[16, 16]} style={{ maxWidth: 800, margin: '0 auto' }}>
                    {selectedLevel && allProducts[selectedLevel].filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product, index) => (
                        <Col key={index} xs={24} sm={12} md={8} lg={8}>
                            <Card
                                hoverable
                                style={{ width: '100%', textAlign: 'center', margin: '0 auto', cursor: 'pointer' }}
                                cover={<img alt={product.name} src={product.logo} style={{ width: 'auto', height: 80, margin: '0 auto' }} />}
                                onClick={() => handleCardClick(product.name)}
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
