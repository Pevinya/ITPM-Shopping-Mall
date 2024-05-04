import React from 'react';
import { Form, Input, Checkbox, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AppFooter from '../Footer';
import AppHeader from '../Header';

const AddProductForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <AppHeader></AppHeader>
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', margin: '20px 0' }}>Cool Planet</div>
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
              <Input placeholder="Product price" />
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
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: 'purple' }}>
                Add New Product
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
