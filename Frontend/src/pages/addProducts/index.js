import React, { useState, useEffect } from 'react';
import { Form, Input, Checkbox, Button, message, Modal, Card, Row, Col, Spin, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AppFooter from '../Footer';
import AppHeader from '../Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const { Meta } = Card;

const AddProductForm = () => {
  const { name } = useParams();
  const [form] = Form.useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false); // State to control modal visibility
  const [products, setProducts] = useState([]);
  const [fetchingProducts, setFetchingProducts] = useState(false);
  const [editProduct, setEditProduct] = useState(null); // State to store the product being edited

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('price', values.price);
      formData.append('shop', name);
      formData.append('description', values.description);
      formData.append('size', values.size);
      formData.append('color', values.Color);
      formData.append('file', selectedFile);

      // Make API call to add item
      const response = await axios.post('http://localhost:5000/api/item/add-items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        message.success('Item added successfully');
        form.resetFields();
        fetchProducts(); // Call the fetchProducts function after adding an item
      } else {
        message.error('Failed to add item');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      message.error('Failed to add item');
    } finally {
      setLoading(false);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setEditProduct(null); // Reset the editProduct state when modal is closed
  };

  const fetchProducts = async () => {
    try {
      setFetchingProducts(true);
      const response = await axios.get(`http://localhost:5000/api/item/get-items-by-shop/${name}`);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setFetchingProducts(false);
    }
  };

  useEffect(() => {
    console.log('Component rendered');
    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);

  useEffect(() => {
    console.log('Products state updated:', products);
  }, [products]);

  const handleEdit = (product) => {
    // Set the product being edited to the state
    setEditProduct(product);
    setVisible(true); // Open the modal for editing
  };

  const handleDelete = async (productId) => {
    // Handle delete action
    console.log('Delete product:', productId);
    try {
      const response = await axios.delete(`http://localhost:5000/api/item/delete-item/${productId}`);
      if (response.data.success) {
        message.success('Product deleted successfully');
        fetchProducts();
      } else {
        message.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      message.error('Failed to delete product');
    }
  };

  const handleUpdate = async (values) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('price', values.price);
      formData.append('shop', name);
      formData.append('description', values.description);
      formData.append('size', values.size);
      formData.append('color', values.Color);
      formData.append('file', selectedFile);

      // Make API call to update item
      const response = await axios.put(`http://localhost:5000/api/item/update-item/${editProduct._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        message.success('Product updated successfully');
        setVisible(false);
        setEditProduct(null);
        fetchProducts();
      } else {
        message.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      message.error('Failed to update product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <AppHeader />
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', margin: '20px 0' }}>
        Shop Name: {name}
      </div>
      <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: '999', marginTop: '75px' }}>
        <Button type="primary" onClick={showModal} style={{ backgroundColor: 'purple' }}>
          Add New Product
        </Button>
      </div>
      <Modal
        title={editProduct ? 'Edit Product' : 'Add Product'}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          name="product_form"
          layout="vertical"
          onFinish={editProduct ? handleUpdate : onFinish}
          initialValues={editProduct}
        >
          <Form.Item
            name="name"
            label="Enter Product Name"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input placeholder="Product name" />
          </Form.Item>

          <Form.Item
            name="price"
            label="Enter Product Price"
            rules={[{ required: true, message: 'Please input the product price!' }]}
          >
            <Input type="number" placeholder="Product price" />
          </Form.Item>

          <Form.Item
            name="size"
            label="Select Size"
          >
            <Checkbox.Group style={{ width: '100%' }}>
              <Checkbox value="XS" style={{ lineHeight: '32px' }}>XS</Checkbox>
              <Checkbox value="S" style={{ lineHeight: '32px' }}>S</Checkbox>
              <Checkbox value="M" style={{ lineHeight: '32px' }}>M</Checkbox>
              <Checkbox value="L" style={{ lineHeight: '32px' }}>L</Checkbox>
              <Checkbox value="XL" style={{ lineHeight: '32px' }}>XL</Checkbox>
              <Checkbox value="XXL" style={{ lineHeight: '32px' }}>XXL</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            name="Color"
            label="Select color"
          >
            <Checkbox.Group style={{ width: '100%' }}>
              <Checkbox value="Red" style={{ lineHeight: '32px' }}>Red</Checkbox>
              <Checkbox value="Blue" style={{ lineHeight: '32px' }}>Blue</Checkbox>
              <Checkbox value="Black" style={{ lineHeight: '32px' }}>Black</Checkbox>
              <Checkbox value="White" style={{ lineHeight: '32px' }}>White</Checkbox>
              <Checkbox value="Yellow" style={{ lineHeight: '32px' }}>Yellow</Checkbox>
              <Checkbox value="Purple" style={{ lineHeight: '32px' }}>Purple</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
          >
            <Input.TextArea rows={4} placeholder="Enter description" />
          </Form.Item>

          <Form.Item
            name="productImage "
            label="Upload Product Images"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <input
              accept=".png, .jpeg, .jpg"
              type="file"
              onChange={handleFileChange}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: 'purple' }}
              loading={loading}
            >
              {loading ? (editProduct ? 'Updating...' : 'Adding...') : (editProduct ? 'Update Product' : 'Add New Product')}
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div style={{ padding: '20px' }}>
        <Spin spinning={fetchingProducts}>
          <Row gutter={[16, 16]}>
            {Array.isArray(products) &&
              products.map((product) => (
                <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    style={{
                      marginBottom: '20px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      borderRadius: '8px',
                    }}
                    cover={
                      <img
                        alt={product.title}
                        src={product.productImage}
                        style={{
                          borderTopLeftRadius: '8px',
                          borderTopRightRadius: '8px',
                          height: '200px',
                          objectFit: 'cover',
                        }}
                      />
                    }
                    actions={[
                      <Button type="primary" onClick={() => handleEdit(product._id)} icon={<EditOutlined />} />,
                      <Popconfirm
                        title="Are you sure to delete this product?"
                        onConfirm={() => handleDelete(product._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button type="primary" danger icon={<DeleteOutlined />} />
                      </Popconfirm>,
                    ]}
                  >
                    <Meta
                      title={<div>{product.title}</div>}
                      description={
                        <div>
                          <span style={{ fontWeight: 'bold', color: 'black' }}>{`RS ${product.price}.00`}</span>
                          <br />
                          {product.description}
                          <br />
                          <span style={{ fontWeight: 'bold', color: 'black' }}>{`Size : ${product.size}`}</span>
                          <br />
                          <span style={{ fontWeight: 'bold', color: 'black' }}>{`Color : ${product.color}`}</span>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              ))}
          </Row>
        </Spin>
      </div>

      <AppFooter />
    </div>
  );
};

export default AddProductForm;