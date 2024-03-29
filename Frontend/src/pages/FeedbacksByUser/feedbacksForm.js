import React from 'react';
import { Modal, Form, Input, Row, Col, Upload, Checkbox, message, Switch, Rate } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Button from "../../Components/Button"
import { UpdateFeedbackDetails } from '../../apicalls/feedback';

const { Dragger } = Upload;



export default function FeedbackForm({ open, setOpen, feedback, onFeedbackUpdate }) {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const onFinish = async (values) => {
    try {
      await UpdateFeedbackDetails(feedback._id, values);
      onFeedbackUpdate();
    } catch (error) {
      console.error(error);
      message.error('Failed to update feedback. Please try again.');
    }
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
              tooltips={['Bad', 'Good', 'Very Good']}
              defaultValue={feedback.rate}
              rules={[{ required: true, message: "Enter Rating" }]}
            />
          </Form.Item>
        </Col>

      </Row>
      <div className='flex justify-end gap-2 mt-1'>
        <Button type='button' varient='outlined' title='Cancel' onClick={() => setOpen(false)} />
        <Button title='Save' type='submit'></Button>
      </div>
    </Form>
    </Modal >
  );
}
