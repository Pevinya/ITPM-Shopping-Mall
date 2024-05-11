import React from 'react';
import { Input, Button, Row, Col, Card, Typography, Form, Checkbox } from 'antd';
import AppHeader from '../Header';
import foodies1 from "../../images/community/extrafood.png";
import foodies2 from "../../images/community/resoffer.jpg";
import foodies3 from "../../images/community/tasty.jpg";

const { Title} = Typography;

const Foodies = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <div style={{ background: '#f0f2f5', minHeight: '100vh' }}>
            <AppHeader />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <Title level={2} style={{ color: 'purple', marginBottom: '30px' }}>FOODIES</Title>
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ marginTop: '10px' }}>Do you believe that every meal should be a gastronomic delight?</h1>
                    <h3 style={{ marginTop: '10px' }}>If so, WELCOME to our foodie community, filled with advice, ideas, and delicious extras!</h3>
                </div>
                <Title level={3} style={{ marginBottom: '30px' }}>Advantages</Title>
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Extra Services" src={foodies1} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2>Extra Services</h2>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Restaurant Offers" src={foodies2} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2>Restaurant Offers</h2>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Extra Tasty Content" src={foodies3} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2>Extra Tasty Content</h2>
                        </Card>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop: '30px' }}>
                    <Col>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                            >
                                <Checkbox>Agree with community Terms & conditions</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: 'purple', borderColor: 'purple' }}>
                                    Monthly
                                </Button>
                                <Button type="primary" htmlType="submit" style={{ backgroundColor: 'purple', borderColor: 'purple', marginLeft: '10px' }}>
                                    Annual
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Foodies;
