import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, message } from 'antd';
import AppFooter from '../Footer';
import AppHeader from '../Header';
import axios from 'axios';

const ShowProducts = ({ location }) => {
  const [products, setProducts] = useState([]);
  const pageTitle = location && location.state ? location.state.pageTitle : 'Default Title'; // Check if location and location.state exist

  useEffect(() => {
    // Function to fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/item/get-all-items');
        setProducts(response.data.data); // Assuming response.data contains product data
      } catch (error) {
        console.error('Error fetching products:', error);
        message.error('Failed to fetch products');
      }
    };

    // Call the function to fetch products when the component mounts
    fetchProducts();
  }, []);

  const handleEdit = (productId) => {
    // Handle edit action
    console.log(`Edit product ${productId}`);
  };

  const handleDelete = (productId) => {
    // Handle delete action
    console.log(`Delete product ${productId}`);
  };

  return (
    <div>
      <AppHeader />
      
      <div style={{ padding: '20px', background: '#fff', textAlign: 'center' }}>
        <h2 style={{ padding: '10px', color: '#5e2a84', margin: '10px 0 20px 0', fontSize: '30px', fontFamily: '"Times New Roman", Times, serif' }}>{pageTitle}</h2> {/* Use pageTitle prop for dynamic title */}
        <Row gutter={[16, 24]} style={{ padding: '10px', maxWidth: 1200, margin: '0 auto' }}>
          {products.map((product) => (
            <Col key={product._id} xs={24} sm={12} md={8} lg={8}>
              <Card
                hoverable
                style={{ width: '100%', textAlign: 'center' }}
                cover={
                  <div>
                    <h3 style={{ margin: '10px 0' }}>{product.title}</h3>
                    <img alt={product.title} src={product.productImage} style={{ width: 'auto', height: 200, margin: '0 auto' }} />
                  </div>
                }
              >
                <Card.Meta
                  description={
                    <div>
                      <p>Rs {product.price.toFixed(2)}</p> {/* Assuming price is a number */}
                      <Button type="primary" size="small" style={{ background: '#C8A2C8', color: 'black', borderColor: '#E6E6FA', marginRight: '8px' }} onClick={() => handleEdit(product._id)}>Edit</Button>
                      <Button type="danger" size="small" style={{ background: '#B186B1', color: 'black', borderColor: '#E6E6FA' }} onClick={() => handleDelete(product._id)}>Delete</Button>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <AppFooter />
    </div>
  );
};

export default ShowProducts;
