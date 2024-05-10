import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { AddPackage } from '../../apicalls/package';
import AppFooter from '../Footer';
import AppHeader from '../Header';

const AddPackageForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await AddPackage(values);
      if (response.success) {
        message.success(response.message);
        form.resetFields();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error('Failed to add package');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <AppHeader />
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', margin: '20px 0' }}>Add Package</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <Form
            form={form}
            name="add_package_form"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please enter the title!' }]}
            >
              <Input placeholder="Title" />
            </Form.Item>

            <Form.Item
              name="packageName"
              label="Package Name"
              rules={[{ required: true, message: 'Please enter the package name!' }]}
            >
              <Input placeholder="Package Name" />
            </Form.Item>

            <Form.Item
              name="packagePrice"
              label="Package Price"
              rules={[{ required: true, message: 'Please enter the package price!' }]}
            >
              <Input placeholder="Package Price" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter the description!' }]}
            >
              <Input.TextArea rows={4} placeholder="Description" />
            </Form.Item>

            <Form.Item
              name="advantages"
              label="Advantages"
              rules={[{ required: true, message: 'Please select at least one advantage!' }]}
            >
              <Input.TextArea rows={4} placeholder="Advantages" />
            </Form.Item>

            <Form.Item
              name="addedDate"
              label="Added Date"
              rules={[{ required: true, message: 'Please enter the added date!' }]}
            >
              <Input type="date" />
            </Form.Item>

            <Form.Item
              name="createdBy"
              label="Created By"
              rules={[{ required: true, message: 'Please enter the creator!' }]}
            >
              <Input placeholder="Creator" />
            </Form.Item>

            <Form.Item
              name="image"
              label="Image URL"
              rules={[{ required: true, message: 'Please enter the image URL!' }]}
            >
              <Input placeholder="Image URL" />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: 'purple' }}>
                Add Package
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default AddPackageForm;
