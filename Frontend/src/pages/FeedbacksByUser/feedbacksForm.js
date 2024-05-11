import React , {useState,useEffect} from 'react';
import { Modal, Form, Input, Row, Col,  message,  Rate ,Button} from 'antd';

import { UpdateFeedbackDetails } from '../../apicalls/feedback';






export default function FeedbackForm({ open, setOpen, feedback, onFeedbackUpdate }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        text: feedback.text,
        rate: feedback.rate
      });
    }
  }, [open, feedback, form]);

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const onFinish = async (values) => {
    try {
      await UpdateFeedbackDetails(feedback._id, values);
      onFeedbackUpdate();
      message.success('Feedback successfully updated!');
    } catch (error) {
      console.error(error);
      message.error('Failed to update feedback. Please try again.');
    }
    setLoading(false);
    setOpen(false);
    

  };

  return (
    
      
    <Modal
      title="Update Feedback"
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
              label="Edit Feedback Description"
              name="text"
              rules={[{ required: true, message: "Enter Feedback Description" }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Edit Rating"
              name="rate">
             <Rate
              count={5}
              style={{ color: 'gold' }}
              tooltips={['Unacceptable', 'Needs Improvement ', 'Acceptable','Good','Excellent']}
              defaultValue={feedback.rate}
              rules={[{ required: true, message: "Enter Rating" }]}
            />
          </Form.Item>
        </Col>

      </Row>
      <div className='flex justify-end gap-2 mt-1'>
         <Button type='primary'  title='Cancel' onClick={() => setOpen(false)} style={{ backgroundColor: 'red', color: 'white' }} >
               Cancel
            </Button>
          
         <Button type="primary" htmlType="submit" loading={loading} style={{ backgroundColor: 'green' }}>
                  Save
                </Button>
      </div>
    </Form>
    </Modal >
  
  );
}

