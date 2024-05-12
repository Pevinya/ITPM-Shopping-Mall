import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
import {AddShoppingList } from '../../apicalls/shoppingList.js';
import { Link } from "react-router-dom";
import AppFooter from '../Footer';
import AppHeader from '../Header';

const AddSList = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await AddShoppingList(values);
      if (response.success) {
        message.success(response.message);
        navigate("/viewShoppingList");
        form.resetFields();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error('Failed to add shopping list');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <AppHeader />
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          margin: "20px 0",
        }}
      >
        Add Shopping List
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "600px", width: "100%" }}>
          <Form
            form={form}
            name="add_shopping_form"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter the title!" }]}
            >
              <Input placeholder="Title" />
            </Form.Item>


            <Form.Item
              name="date"
              label="Date"
              rules={[
                { required: true, message: "Please enter the  date!" },
              ]}
            >
              <Input type="date" />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "purple" }}
              >
                Add Shopping List
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default AddSList;
