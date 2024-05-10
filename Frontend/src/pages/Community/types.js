import React, { useState } from 'react';
import { Input, Button, Row, Col, Card, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppFooter from '../Footer';
import AppHeader from '../Header';

import foodLogo from '../../images/storeDirectoryImg/communities/foodie.jpg';
import kidsnfamilyLogo from '../../images/storeDirectoryImg/communities/kids&family.jpg';
import leisureLogo from '../../images/storeDirectoryImg/communities/leisure.jpg';
import shoppersLogo from '../../images/storeDirectoryImg/communities/shoppers.jpg';

const { Title, Paragraph } = Typography;

const JoinCommunity = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel] = useState('Community');
    const navigate = useNavigate();

    const allCommunities = {
        'Community': [
            { id: 1, name: "Foodie", logo: foodLogo},
            { id: 2, name: "Kids & Family", logo: kidsnfamilyLogo},
            { id: 3, name: "Leisure", logo: leisureLogo},
            { id: 4, name: "Shoppers", logo: shoppersLogo}
        ],
    };

    const handleCardClick = (communityName) => {
        navigate(`/joining-community/${communityName}`);
    };

    return (
        <div style={{ background: '#f0f2f5', minHeight: '100vh' }}>
            <AppHeader />
            <div style={{ padding: '20px', background: '#fff', borderRadius: '8px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>Communities</Title>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Paragraph style={{ marginTop: '10px' }}>Life is an adventure, built on what you love. Match with your unique community for a more personal experience based on your interests, and discover people like you along the way.</Paragraph>
                    <Paragraph style={{ marginTop: '10px' }}>Welcome to our community directory. Explore and join communities based on your interests!</Paragraph>
                </div>
                <Input
                    placeholder="Search community"
                    prefix={<SearchOutlined />}
                    style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Row gutter={[16, 16]} justify="center">
                    {selectedLevel && allCommunities[selectedLevel]
                        .filter(community => community.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((community, index) => (
                            <Col key={index} xs={24} sm={12} md={8} lg={6}>
                                <Card
                                    hoverable
                                    style={{ textAlign: 'center', cursor: 'pointer', borderRadius: '8px' }}
                                    cover={<img alt={community.name} src={community.logo} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />}
                                    onClick={() => handleCardClick(community.name)}
                                >
                                    <Title level={4} style={{ margin: '10px 0' }}>{community.name}</Title>
                                    <Button type="primary" style={{ background: '#d3adf7', border: 'none', borderRadius: '4px' }}>Join the community</Button>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
            <AppFooter />
        </div>
    );
};

export default JoinCommunity;
