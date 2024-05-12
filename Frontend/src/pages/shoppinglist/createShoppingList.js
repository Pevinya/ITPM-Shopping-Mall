import React, { useState } from 'react';
import { Button, Form, Input, message, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import moment from 'moment'; // Make sure to install moment.js if not already installed

import { AddShoppingList } from '../../apicalls/api_shoppinglist';
import AppFooter from '../Footer';
import AppHeader from '../Header';

const AddSList = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);

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

  const handleSearch = async (value) => {
    if (!value) {
      setOptions([]);
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/api/item/get-all-items?query=${value}`);
      const items = response.data.data;
      console.log(items)
      setOptions(items.map(item => ({
        label: `${item.title} (${item.shop})`,
        value: item._id
      })));
    } catch (error) {
      console.error('Failed to fetch items:', error);
      setOptions([]);
    }
  };

  // Function to validate the date
  const disabledDate = (current) => {
    // Can not select days before today
    return current && current < moment().startOf('day');
  };

  return (
    <div>
      <AppHeader />
      <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px", margin: "20px 0" }}>
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
              rules={[{ required: true, message: "Please enter the date!" }, { validator: (_, value) => 
                value && moment(value).startOf('day') < moment().startOf('day') ? Promise.reject(new Error("Cannot select a past date")) : Promise.resolve() 
              }]}
            >
              <Input type="date" />
            </Form.Item>

            <Form.Item
              name="items"
              label="Search Products"
            >
              <Select
                mode="multiple"
                showSearch
                placeholder="Select products"
                onSearch={handleSearch}
                filterOption={false}
                options={options}
              />
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
