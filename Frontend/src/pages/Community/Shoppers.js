import React, { useState } from 'react';
import {Row, Col, Card, Typography, Form, Checkbox, Button,Popover, message } from 'antd';
import AppHeader from '../Header';
import shoper1 from "../../images/community/Special-offer.png";
import shoper2 from "../../images/community/services.png";
import shoper3 from "../../images/community/extrShop3.jpg";
import QRCode from 'qrcode.react';

const { Title } = Typography;

const Shoppers = () => {
    const [monthlyPopoverVisible, setMonthlyPopoverVisible] = useState(false);
    const [annualPopoverVisible, setAnnualPopoverVisible] = useState(false);
    const [subscriptionType, setSubscriptionType] = useState(null);

    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    const handleMonthlyButtonClick = () => {
        setSubscriptionType('Monthly');
        setMonthlyPopoverVisible(true);
        message.success('Monthly subscription activated successfully');
    };

    const handleAnnualButtonClick = () => {
        setSubscriptionType('Annual');
        setAnnualPopoverVisible(true);
        message.success('Annual subscription activated successfully');
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
                <Title level={2} style={{ color: 'purple', marginBottom: '30px' }}>SHOPPERS</Title>
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ marginTop: '10px' }}>Is SHOPPING your true pleasure?</h1>
                    <h3 style={{ marginTop: '10px' }}>Welcome to our community directory. Explore and join communities based on your interests!</h3>
                </div>
                <Title level={3} style={{ marginBottom: '30px' }}>Advantages</Title>
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Special Offers" src={shoper1} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2 style={{ marginBottom: 0 }}>Special Offers</h2>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Special Services" src={shoper2} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2 style={{ marginBottom: 0 }}>Special Services</h2>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Extra Inspiration Content" src={shoper3} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2 style={{ marginBottom: 0 }}>Extra Inspiration Content</h2>
                        </Card>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop: '30px' }}>
                    <Col>
                        <Form name="basic" onFinish={onFinish}>
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Agree with community Terms & conditions</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Popover
                                    content={
                                        <QRCode value={`https://qrfy.com/p/x17JAPVOxw?utm_source=qrcode&utm_medium=landing&utm_campaign=39818059${subscriptionType}`} />
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
                                        <QRCode value={`https://qrfy.com/p/qdVeFoRZ2z?utm_source=qrcode&utm_medium=landing&utm_campaign=39818234${subscriptionType}`} />
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

export default Shoppers;
