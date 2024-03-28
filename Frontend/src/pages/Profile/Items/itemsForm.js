import React from 'react';
import { Modal, Form, Input, Row, Col, Upload, Checkbox, message, Switch } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Button from "../../../Components/Button"
import { AddItems } from '../../../apicalls/item';

const { Dragger } = Upload;

const colorOptions = [
  { label: 'Red', value: 'red', color: '#ff4d4f' },
  { label: 'Blue', value: 'blue', color: '#1890ff' },
  { label: 'Green', value: 'green', color: '#52c41a' },
  { label: 'Yellow', value: 'yellow', color: '#fadb14' },
  { label: 'Black', value: 'black', color: '#000000' },
  { label: 'White', value: 'white', color: '#ffffff' },
  // Add more color options as needed
];

export default function ItemForm({ open, setOpen }) {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    AddItems(values)
    setOpen(false);
  };

  const onFileUpload = (info) => {
    const { status } = info.file;
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Modal
      title="Add Products"
      visible={open}
      onCancel={handleCancel}
      centered
      width={800}
      footer={null}
    >
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Enter Product Name"
              name="title"
              rules={[{ required: true, message: "Enter Product name" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Enter Product Price"
              name="price"
              rules={[{ required: true, message: "Please input Product price" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Size"
              name="size"
              rules={[{ required: true, message: "Please select at least one size" }]}
            >
              <Checkbox.Group>
                <Row>
                  <Col span={8}>
                    <Checkbox value="XS">XS</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="S">S</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="M">M</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="L">L</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="XL">XL</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Color"
              name="color"
              rules={[{ required: true, message: "Please select at least one color" }]}
            >
              <Checkbox.Group>
                <Row>
                  {colorOptions.map(color => (
                    <Col span={4} key={color.value}>
                      <Checkbox value={color.value}>
                        <div style={{ backgroundColor: color.color, width: '20px', height: '20px', border: '1px solid #d9d9d9' }}></div>
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </Col>


          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please input Product description" }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Best Selling"
              name="bestSelling"
              valuePropName="checked" // This is required for Switch component
            >
              <Switch />
            </Form.Item>
          </Col>

          {/* <Col span={24}>
            <Form.Item
              label="Image Upload"
              name="image"
              rules={[{ required: true, message: "Please upload an image" }]}
            >
              <Dragger
                name="file"
                multiple={false}
                action="/upload/image"
                onChange={onFileUpload}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag image file to this area to upload</p>
              </Dragger>
            </Form.Item>
          </Col> */}
        </Row>
        <div className='flex justify-end gap-2 mt-1'>
          <Button type='button' varient='outlined' title='cancel' onClick={() => setOpen(false)} />
          <Button title='save' type='submit'></Button>
        </div>
      </Form>
    </Modal>
  );
}
