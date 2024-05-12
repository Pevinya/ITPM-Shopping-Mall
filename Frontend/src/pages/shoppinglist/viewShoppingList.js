import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, message, Space, Table, Modal, Form, DatePicker, Select } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import AppFooter from "../Footer";
import AppHeader from "../Header";
import { DeleteShoppingList, GetAllShoppingList, UpdateShoppingList } from "../../apicalls/api_shoppinglist";
import "./shoppingList.css";
import axios from "axios";

const ShoppingListView = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedShoppingList, setSelectedShoppingList] = useState(null);
  const [options, setOptions] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchShoppingList = async () => {
      const result = await GetAllShoppingList();
      if (result.success) {
        setShoppingList(result.data);
      } else {
        message.error("Failed to fetch shopping lists");
      }
    };
    fetchShoppingList();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this shopping list?");
    if (confirm) {
      const response = await DeleteShoppingList(id);
      if (response.success) {
        setShoppingList(prev => prev.filter((item) => item._id !== id));
        message.success("Shopping list deleted successfully");
      } else {
        message.error("Failed to delete shopping list");
      }
    }
  };

  const handleUpdate = (record) => {
    setSelectedShoppingList(record);
    setModalVisible(true);
    form.setFieldsValue({
      title: record.title,
      date: moment(record.date),
      items: record.items?.map(item => item.value) || [] // Ensure safe access and fallback
    });
  };
  

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedShoppingList(null);
    form.resetFields();
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

  const onFinish = async (values) => {
    const updatedShoppingList = {
      ...selectedShoppingList,
      title: values.title,
      date: values.date.format("YYYY-MM-DD"),
      items: values.items // Assuming this will be handled by your backend to match the structure
    };
    const response = await UpdateShoppingList(selectedShoppingList._id, updatedShoppingList);
    if (response.success) {
      setShoppingList(prev =>
        prev.map(item =>
          item._id === selectedShoppingList._id ? updatedShoppingList : item
        )
      );
      message.success("Shopping list updated successfully");
      handleModalClose();
    } else {
      message.error("Failed to update shopping list");
    }
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => moment(text).format("YYYY-MM-DD"),
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} style={{ background: '#FFD700', borderColor: '#FFD700' }} onClick={() => handleUpdate(record)}>
            <span style={{ color: "white" }}>Update</span>
          </Button>
          <Button onClick={() => handleDelete(record._id)} type="danger" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  const expandable = {
    expandedRowRender: record => (
      <div>
        <p style={{ margin: 0 }}>Items:</p>
        <ul>
          {record.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    ),
    rowExpandable: record => record.items && record.items.length > 0,
  };

  return (
    <div>
      <AppHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>
          All Shopping Lists
        </h1>
        <div>
          <Input
            placeholder="Search by title"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 200, marginRight: 8 }}
          />
          <Button
            type="primary"
            style={{
              backgroundColor: "#d3adf7",
              borderColor: "#d3adf7",
            }}
          >
            <Link
              to="/createShoppingList"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <PlusOutlined /> Create New Shopping List
            </Link>
          </Button>
        </div>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={shoppingList.filter(list => list.title.toLowerCase().includes(searchTerm.toLowerCase()))} rowKey="_id" bordered expandable={expandable} />
      </div>
      <Modal
        title="Update Shopping List"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter the title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select the date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
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
              notFoundContent={null}
            />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button onClick={handleModalClose}>Cancel</Button>
          </Space>
        </Form>
      </Modal>
      <AppFooter />
    </div>
  );
};

export default ShoppingListView;
