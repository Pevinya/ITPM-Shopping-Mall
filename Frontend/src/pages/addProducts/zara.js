import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, message } from 'antd';
import AppFooter from '../Footer';
import AppHeader from '../Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddProductForm = () => {
  const { name } = useParams();
  const [form] = Form.useForm();
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
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

    
      formData.append('file', selectedFile); // Append the file object directly
      console.log(selectedFile)
     
      // Make API call to add item
      const response = await axios.post('http://localhost:5000/api/item/add-items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        message.success('Item added successfully');
        form.resetFields(); // Reset form fields after successful submission
      } else {
        message.error('Failed to add item');
      }
    } catch (error) {
      console.error('Error adding item:', error);
      message.error('Failed to add item');
    }
    finally {
      setLoading(false); 
    }
  };

  
  const normFile = (e) => {
    if (Array.isArray(e)) {
    console.log(e)

      return e;
    }
    console.log(e.fileList)
    return e && e.fileList;
  };

  return (
    <div>
      <AppHeader />
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', margin: '20px 0' }}>Shop Name: {name}</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <Form
            form={form}
            name="product_form"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              size_type: 'clothes',
              best_selling: false,
            }}
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
              name="upload"
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
                loading={loading} // Set loading prop to true when loading state is true
              >
                {loading ? 'Adding...' : 'Add New Product'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default AddProductForm;