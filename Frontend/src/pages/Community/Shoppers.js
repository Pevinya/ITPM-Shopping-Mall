import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Row, Col, Card, Typography, Form, Checkbox } from 'antd';
import AppHeader from '../Header';
import shoper1 from "../../images/community/Special-offer.png";
import shoper2 from "../../images/community/services.png";
import shoper3 from "../../images/community/extrShop3.jpg";

const { Title, Paragraph } = Typography;

const Shoppers = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <div style={{ background: '#f0f2f5', minHeight: '100vh' }}>
            <AppHeader />
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px', color: 'purple' }}>Shoppers</Title>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ marginTop: '10px' }}>Is SHOPPING your true pleasure ?</h1>
                <h3 style={{ marginTop: '10px' }}>Welcome to our community directory. Explore and join communities based on your interests!</h3>
            </div>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>Advantages</Title>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card>
                        <img src={shoper1} alt="Special Offers" style={{ width: '100%', height: 'auto' }} />
                        <h2>Special Offers</h2>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card>
                        <img src={shoper2} alt="Services" style={{ width: '100%', height: 'auto' }} />
                        <h3>Special Services</h3>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card>
                        <img src={shoper3} alt="raaa 3" style={{ width: '100%', height: 'auto' }} />
                        <Paragraph>Extra Inspiration Content</Paragraph>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
                <Col span={24} style={{ textAlign: 'center', marginTop: '30px' }}>
                    
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        initialValues={{ remember: true }}
                        style={{ display: 'inline-block' }}
                    >
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>Agree with community Terms & conditions</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" background={'purple'}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Shoppers;
