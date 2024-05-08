import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import AppFooter from '../Footer';
import AppHeader from '../Header';

// Example product data
const products = [
  { id: 1, name: "Front Knot Skater Dress", price: "Rs 4,790.00", images: ["image1.jpg", "image2.jpg"] },
  { id: 2, name: "Cotton Maxi Dress", price: "Rs 3,999.00", images: ["image3.jpg", "image4.jpg"] },
  { id: 3, name: "Striped Linen Shirt Dress", price: "Rs 5,250.00", images: ["image5.jpg", "image6.jpg"] },
  { id: 4, name: "Knitted Mini Dress", price: "Rs 2,899.00", images: ["image7.jpg", "image8.jpg"] },
  { id: 5, name: "Pleated Midi Skirt", price: "Rs 3,499.00", images: ["image9.jpg", "image10.jpg"] },
  { id: 6, name: "High Waisted Trousers", price: "Rs 2,999.00", images: ["image11.jpg", "image12.jpg"] },
  { id: 7, name: "Embroidered Blouse", price: "Rs 4,199.00", images: ["image13.jpg", "image14.jpg"] },
  { id: 8, name: "Denim Jacket", price: "Rs 3,799.00", images: ["image15.jpg", "image16.jpg"] },
  { id: 9, name: "Canvas Sneakers", price: "Rs 1,999.00", images: ["image17.jpg", "image18.jpg"] },
];

const ShowProducts = () => {
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
        <h2 style={{ padding: '10px', color: '#5e2a84', margin: '10px 0 20px 0', fontSize: '30px', fontFamily: '"Times New Roman", Times, serif' }}>Cool Planet</h2>
        <Row gutter={[16, 24]} style={{ padding: '10px', maxWidth: 1200, margin: '0 auto' }}>
          {products.map((product, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8}>
              <Card
                hoverable
                style={{ width: '100%', textAlign: 'center' }}
                cover={<img alt={product.name} src={product.images[0]} style={{ width: 'auto', height: 200, margin: '0 auto' }} />}
              >
                <Card.Meta
                  title={product.name}
                  description={
                    <div>
                      <p> {product.price}</p>
                      <Button type="primary" size="small" style={{ background: '#C8A2C8', color: 'black', borderColor: '#E6E6FA', marginRight: '8px' }} onClick={() => handleEdit(product.id)}>Edit</Button>
<Button type="danger" size="small" style={{ background: '#B186B1', color: 'black', borderColor: '#E6E6FA' }} onClick={() => handleDelete(product.id)}>Delete</Button>
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
