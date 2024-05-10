import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import AppHeader from '../Header';
import AppFooter from '../Footer';

const { Title, Text } = Typography;

const ShowOneProduct = () => {
  // Sample product data
  const sampleProduct = {
    _id: '1',
    title: 'Sample Product',
    price: 99.99,
    size: 'Medium',
    colors: ['Red', 'Blue', 'Green'],
    description: 'This is a sample product description. It can be as long as necessary to describe the product in detail.',
    productImage: 'https://via.placeholder.com/150', // Smaller image size
  };

  // Get productId from URL params
  const { productId } = useParams();

  // Event handler for edit action
  const handleEdit = () => {
    console.log(`Edit product ${productId}`);
  };

  // Event handler for delete action
  const handleDelete = () => {
    console.log(`Delete product ${productId}`);
  };

  return (
    <div>
      <AppHeader />
      <div style={{ padding: '20px', background: '#f0f2f5' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Card
              cover={<img alt={sampleProduct.title} src={sampleProduct.productImage} style={{ width: '100%', height: 'auto' }} />}
              style={{ height: '100%' }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={16}>
            <Card title={<Title level={3}>{sampleProduct.title}</Title>} style={{ height: '100%' }}>
              <div style={{ marginBottom: '20px' }}>
                <Text strong>Price:</Text> Rs {sampleProduct.price.toFixed(2)}
              </div>
              <div style={{ marginBottom: '20px' }}>
                <Text strong>Size:</Text> {sampleProduct.size}
              </div>
              <div style={{ marginBottom: '20px' }}>
                <Text strong>Colors:</Text> {sampleProduct.colors.join(', ')}
              </div>
              <div style={{ marginBottom: '20px' }}>
                <Text strong>Description:</Text> {sampleProduct.description}
              </div>
              <div>
                <Button type="primary" style={{ marginRight: '10px' }} onClick={handleEdit}>Edit</Button>
                <Button type="danger" onClick={handleDelete}>Delete</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <AppFooter />
    </div>
  );
};

export default ShowOneProduct;
