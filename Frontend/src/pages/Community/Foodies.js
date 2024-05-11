import React, { useState } from 'react';
import {Button, Row, Col, Card, Typography, Form, Checkbox, Popover, message } from 'antd'; // Import message from 'antd'
import AppHeader from '../Header';
import foodies1 from "../../images/community/extrafood.png";
import foodies2 from "../../images/community/resoffer.jpg";
import foodies3 from "../../images/community/tasty.jpg";
import QRCode from 'qrcode.react';

const { Title } = Typography;

const Foodies = () => {
    const [monthlyPopoverVisible, setMonthlyPopoverVisible] = useState(false);
    const [annualPopoverVisible, setAnnualPopoverVisible] = useState(false);
    const [subscriptionType, setSubscriptionType] = useState(null);

    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    const handleMonthlyButtonClick = () => {
        setSubscriptionType('Monthly');
        setMonthlyPopoverVisible(true);
        message.success('Monthly subscription activated successfully'); // Show success message
    };

    const handleAnnualButtonClick = () => {
        setSubscriptionType('Annual');
        setAnnualPopoverVisible(true);
        message.success('Annual subscription activated successfully'); // Show success message
    };

    const handlePopoverClose = () => {
        setMonthlyPopoverVisible(false);
        setAnnualPopoverVisible(false);
        setSubscriptionType(null);
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
                                <Popover
                                    content={
                                        <QRCode value={`https://qrfy.com/p/gSo8li5aSq?utm_source=qrcode&utm_medium=landing&utm_campaign=39817557${subscriptionType}`} />
                                    }
                                    title="Monthly Subscription"
                                    trigger="click"
                                    visible={monthlyPopoverVisible}
                                    onVisibleChange={setMonthlyPopoverVisible}
                                    placement="bottom"
                                >
                                    <Button type="primary" onClick={handleMonthlyButtonClick} style={{ backgroundColor: 'purple', borderColor: 'purple' }}>
                                        Monthly
                                    </Button>
                                </Popover>
                                <Popover
                                    content={
                                        <QRCode value={`https://qrfy.com/p/OIiyxaXxp4?utm_source=qrcode&utm_medium=landing&utm_campaign=39817814${subscriptionType}`} />
                                    }
                                    title="Annual Subscription"
                                    trigger="click"
                                    visible={annualPopoverVisible}
                                    onVisibleChange={setAnnualPopoverVisible}
                                    placement="bottom"
                                >
                                    <Button type="primary" onClick={handleAnnualButtonClick} style={{ backgroundColor: 'purple', borderColor: 'purple', marginLeft: '10px' }}>
                                        Annual
                                    </Button>
                                </Popover>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Foodies;
