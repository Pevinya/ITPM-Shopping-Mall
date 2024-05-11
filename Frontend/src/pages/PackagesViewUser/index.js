import React, { useEffect, useState } from "react";
import { Card, message, Modal, Button } from "antd";
import { GetAllPackages } from "../../apicalls/package";
import AppFooter from "../Footer";
import AppHeader from "../Header";

const { Meta } = Card;

const PackagesViewUser = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [visible, setVisible] = useState(false);

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

  const handleMoreDetails = (packageItem) => {
    setSelectedPackage(packageItem);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <AppHeader />
      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}>
          All Packages
        </h1>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {packages.map((packageItem) => (
            <Card
              key={packageItem._id}
              hoverable
              style={{ width: 300, margin: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
              cover={<img alt="package" src={packageItem.image} style={{ borderRadius: "10px 10px 0 0" }} />}
            >
              <Meta
                title={<div style={{ fontWeight: "bold", marginBottom: "10px" }}>{packageItem.title}</div>}
                description={<div style={{ fontSize: "14px" }}>{packageItem.description}</div>}
              />
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button type="primary" style={{ backgroundColor: "#d3adf7", borderColor: "#d3adf7" }} onClick={() => handleMoreDetails(packageItem)}>More Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Modal
        title={selectedPackage && selectedPackage.title}
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>
        ]}
      >
        <p><strong>Package Name:</strong> {selectedPackage && selectedPackage.packageName}</p>
        <p><strong>Price:</strong> {selectedPackage && selectedPackage.packagePrice}</p>
        <p><strong>Advantages:</strong> {selectedPackage && selectedPackage.advantages}</p>
        <p><strong>Description:</strong> {selectedPackage && selectedPackage.description}</p>
      </Modal>
      <AppFooter />
    </div>
  );
};

export default PackagesViewUser;
