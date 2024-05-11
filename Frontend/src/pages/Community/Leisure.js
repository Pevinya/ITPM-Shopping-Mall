import React, { useState }  from 'react';
import {Row, Col, Card, Typography, Form, Checkbox, Button,Popover, message } from 'antd';
import AppHeader from '../Header';
import leisure1 from "../../images/community/relax.png";
import leisure2 from "../../images/community/wifi.jpg";
import leisure3 from "../../images/community/sup.jpg";
import QRCode from 'qrcode.react';

const { Title } = Typography;

const Leisure = () => {
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
                <Title level={2} style={{ color: 'purple', marginBottom: '30px' }}>LEISURE</Title>
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ marginTop: '10px' }}>Discover the joy of leisure activities and hobbies with like-minded individuals.</h1>
                    <h3 style={{ marginTop: '10px' }}>Movies, games, tech, music Make your visit, a fun-filled day out and get ready to be entertained with our leisure offering.</h3>
                </div>
                <Title level={3} style={{ marginBottom: '30px' }}>Advantages</Title>
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Relaxation and Stress Relief" src={leisure1} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2 style={{ marginBottom: 0 }}>Relaxation and Stress Relief</h2>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Free WiFi" src={leisure2} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2 style={{ marginBottom: 0 }}>Free WiFi</h2>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card hoverable cover={<img alt="Community Support" src={leisure3} style={{ height: '200px', objectFit: 'cover' }} />}>
                            <h2 style={{ marginBottom: 0 }}>Community Support</h2>
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
                                        <QRCode value={`https://qrfy.com/p/-es74_kklS?utm_source=qrcode&utm_medium=landing&utm_campaign=39818157${subscriptionType}`} />
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

export default Leisure;
