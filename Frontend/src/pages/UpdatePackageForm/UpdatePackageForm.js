import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPackageById, UpdatePackage } from "../../apicalls/package"; // Corrected import names
import AppFooter from "../Footer";
import AppHeader from "../Header";
import "./UpdatePackageForm.css";

const UpdatePackageForm = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackage = async () => {
      const result = await GetPackageById(id); // Use the correct function name
      if (result.success) {
        form.setFieldsValue(result.data);
      } else {
        message.error("Failed to fetch package details");
      }
    };
    fetchPackage();
  }, [id, form]);

  const onFinish = async (values) => {
    const response = await UpdatePackage(id, values); // Use the correct function name
    if (response.success) {
      message.success("Package updated successfully");
      navigate("/packagesView"); // or wherever you want to redirect after updating
    } else {
      message.error(response.message);
    }
  };

  return (
    <div className="update-package-form">
      <AppHeader />
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          margin: "20px 0",
        }}
      >
        Update Package
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "600px", width: "100%" }}>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="packageName"
              label="Package Name"
              rules={[
                { required: true, message: "Please input the package name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="packagePrice"
              label="Package Price"
              //add currency symbol to this field

              rules={[
                { required: true, message: "Please input the package price!" },
              ]}
            >
              <Input prefix="$" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: "Please input the description!" },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="advantages"
              label="Advantages"
              rules={[
                { required: true, message: "Please input the advantages!" },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="addedDate"
              label="Added Date"
              rules={[
                { required: true, message: "Please input the added date!" },
              ]}
            >
              <Input type="date" />
            </Form.Item>

            <Form.Item
              name="createdBy"
              label="Created By"
              rules={[{ required: true, message: "Please input the creator!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="image"
              label="Image URL"
              rules={[
                { required: true, message: "Please input the image URL!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "purple" }}
              >
                Update Package
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default UpdatePackageForm;
