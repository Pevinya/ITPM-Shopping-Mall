import { Button, message, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteShoppingList, GetAllShoppingList } from "../../apicalls/shoppingList";
import AppFooter from "../Footer";
import AppHeader from "../Header";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment"; // Import moment library

import "./shoppingList.css"; 

const ShoppingListView = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const fetchShoppingList = async () => {
      const result = await GetAllShoppingList();
      if (result.success) {
        setShoppingList(result.data);
      } else {
        message.error("Failed to fetch shoppingList");
      }
    };
    fetchShoppingList();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this shoppingList?"
    );
    if (confirm) {
      const response = await DeleteShoppingList(id);
      if (response.success) {
        setShoppingList(shoppingList.filter((pkg) => pkg._id !== id));
        message.success("Shopping list deleted successfully");
      } else {
        message.error("Failed to delete shoppingList");
      }
    }
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { 
      title: "Date", 
      dataIndex: "date", 
      key: "date",
      render: (text) => moment(text).format("YYYY-MM-DD"), // Format date using moment
      align: "center", // Align the date in the middle
    },
   
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} style={{ background: '#FFD700', borderColor: '#FFD700' }}>
            <Link
              to={`/updateShoppingList/${record._id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <span style={{ color: "white" }}>Update</span>
            </Link>
          </Button>
          <Button onClick={() => handleDelete(record._id)} type="danger" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

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
      <div className="table-container">
        <Table columns={columns} dataSource={shoppingList} rowKey="_id" bordered />
      </div>
      <AppFooter />
    </div>
  );
};

export default ShoppingListView;
