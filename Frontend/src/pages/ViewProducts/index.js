import React from 'react';
import { Form, Input, Switch, Radio, Checkbox, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
//import 'antd/dist/antd.css';

const ProductForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  // For uploading images, this part is generally handled by the backend
  // This is a placeholder function to simulate the process
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className="product-form-container" style={{ maxWidth: '300px', margin: 'auto' }}>
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
          name="offer_price"
          label="Offer Price"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="size_type"
          label="Size"
        >
          <Radio.Group>
            <Radio.Button value="clothes">Clothes</Radio.Button>
            <Radio.Button value="shoes">Shoes</Radio.Button>
          </Radio.Group>
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
          name="color"
          label="Color"
        >
          <Radio.Group>
            <Radio.Button style={{ backgroundColor: 'blue' }} value="blue"> </Radio.Button>
            <Radio.Button style={{ backgroundColor: 'red' }} value="red"> </Radio.Button>
            <Radio.Button style={{ backgroundColor: 'yellow' }} value="yellow"> </Radio.Button>
            <Radio.Button style={{ backgroundColor: 'green' }} value="green"> </Radio.Button>
            <Radio.Button style={{ backgroundColor: 'purple' }} value="purple"> </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
        >
          <Input.TextArea rows={4} placeholder="Enter description" />
        </Form.Item>

        <Form.Item
          name="best_selling"
          label="Best Selling"
          valuePropName="checked"
        >
          <Switch />
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add New Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;
