import React, { useState } from 'react';
import { Form, Rate, Select,message} from 'antd';
import Button from '../../Components/Button';
import { AddFeedback } from '../../apicalls/feedback';




const { Option } = Select;
function CreateFeedback() {
 
  const [form] = Form.useForm();
  const [values, setValues] = useState({
    name: '',
    email: '',
    rate: 0,
    text: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      const response = await AddFeedback(values);
      console.log(response);
      setIsSuccess(true);
      message.success('Successfully added!');
      form.resetFields();
    
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
    
    <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', margin: '20px 0' }}>Feedbacks</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: '500px', width: '100%' }}>
        {isSuccess && <p className="text-green-500 mb-2">Successfully added!</p>}
        <hr />
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={values}
        >
          <Form.Item label="Name" name="name"
           rules={[{ required: true, message: 'Name is required' }]}>
            <input
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              style={{ width: '90%', margin: '0 20px 20px 0',height: '25px' }}
            />
          </Form.Item>
          <Form.Item label="Email" name="email"
           rules={[{ required: true, message: 'Email is required' }]}>
            <input
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              style={{ width: '90%',height: '25px', }}
            />
            </Form.Item>
          <Form.Item label="Select the Package" name="filterOption"
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
          
          <Form.Item label="Rate" name="rate">
            <Rate
              count={5}
              style={{ color: 'gold' }}
              tooltips={['Unacceptable', 'Needs Improvement ', 'Acceptable','Good','Excellent']}
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
          <Button title="Submit" type="submit" color="secondary"style={{ backgroundColor: 'purple' }}/>
          </Form.Item>
        </Form>
      </div>
    </div>
    
    </div>
  );
}

export default CreateFeedback;
