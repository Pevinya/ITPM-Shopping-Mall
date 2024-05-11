import { Button, message, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeletePackage, GetAllPackages } from "../../apicalls/package";
import AppFooter from "../Footer";
import AppHeader from "../Header";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import "./PackagesView.css"; 

const PackagesView = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const result = await GetAllPackages();
      if (result.success) {
        setPackages(result.data);
      } else {
        message.error("Failed to fetch packages");
      }
    };
    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this package?"
    );
    if (confirm) {
      const response = await DeletePackage(id);
      if (response.success) {
        setPackages(packages.filter((pkg) => pkg._id !== id));
        message.success("Package deleted successfully");
      } else {
        message.error("Failed to delete package");
      }
    }
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Package Name", dataIndex: "packageName", key: "packageName" },
    { title: "Price $", dataIndex: "packagePrice", key: "packagePrice" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Advantages", dataIndex: "advantages", key: "advantages" },
    { title: "Added Date", dataIndex: "addedDate", key: "addedDate" },
    { title: "Created By", dataIndex: "createdBy", key: "createdBy" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img src={text} alt="package" style={{ width: "100px" }} />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} style={{ background: '#FFD700', borderColor: '#FFD700' }}>
            <Link
              to={`/update-package/${record._id}`}
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
          All Packages
        </h1>
        <Button
          type="primary"
          style={{
            backgroundColor: "#d3adf7",
            borderColor: "#d3adf7",
          }}
        >
          <Link
            to="/package"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <PlusOutlined /> Create New Package
          </Link>
        </Button>
      </div>
      <div className="table-container">
        <Table columns={columns} dataSource={packages} rowKey="_id" bordered />
      </div>
      <AppFooter />
    </div>
  );
};

export default PackagesView;
