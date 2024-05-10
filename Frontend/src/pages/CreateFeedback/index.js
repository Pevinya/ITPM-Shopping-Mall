import React, { useState } from 'react';
import { Form, Rate, Select, message, Button } from 'antd';
import { AddFeedback } from '../../apicalls/feedback';
import AppFooter from '../Footer';
import AppHeader from '../Header';

const { Option } = Select;

function CreateFeedback() {

  const [form] = Form.useForm();
  const [values, setValues] = useState({
    name: '',
    email: '',
    rate: 0,
    text: ''
  });

  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      const response = await AddFeedback(values);
      console.log(response);
      message.success('Successfully added!');
      form.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AppHeader />
      <div style={{ padding: '20px', background: '#fff' }}></div>
      <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '30px', fontFamily: '"Times New Roman", Times, serif' }}>Feedback </h2>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', Width: '80px', height: '70%' }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
         
            <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Provide Your Feedback</h3>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={values}
            style={{ background: '#f0f2f5', padding: '20px', borderRadius: '8px' }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Name is required' }]}>
              <input
                placeholder="Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                style={{ width: '100%', height: '25px' }}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Email is required' }]}>
              <input
                placeholder="Email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                style={{ width: '100%', height: '25px', }}
              />
            </Form.Item>
            <Form.Item
              label="Select the Package"
              name="filterOption"
              rules={[{ required: true, message: 'Package selection required' }]}>
              <Select
                placeholder="Select a filter option"
                onChange={(value) => setValues({ ...values, filterOption: value })}
                style={{ width: '100%' }}
              >
                <Option value="Kids & Family">Kids & Family</Option>
                <Option value="Leisure">Leisure</Option>
                <Option value="Foodie">Foodie</Option>
                <Option value="Shoppers">Shoppers</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Rate"
              name="rate">
              <Rate
                count={5}
                style={{ color: 'gold' }}
                tooltips={['Unacceptable', 'Needs Improvement ', 'Acceptable', 'Good', 'Excellent']}
                onChange={(value) => setValues({ ...values, rate: value })}
              />
            </Form.Item>

            <Form.Item
              label="Feedback"
              name="text"
              rules={[{ required: true, message: 'Feedback is required' }]}
            >
              <textarea
                autoSize={{ minRows: 3, maxRows: 6 }}
                value={values.text}
                onChange={(e) => setValues({ ...values, text: e.target.value })}
                style={{ margin: '10px 10px 10px 0', width: 'calc(100% - 10px)' }}
              />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" title="Submit" color="secondary" style={{ backgroundColor: 'purple' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default CreateFeedback;
