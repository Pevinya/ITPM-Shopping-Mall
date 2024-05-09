import React, { useState } from 'react';
import { Input, Button, List, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import AppFooter from '../Footer';
import AppHeader from '../Header';


const { Option } = Select;

const data = [
  "Shopping for My Day-out",
  "Christmas Shopping",
  "Mom’s Birthday Shopping",
  "Sinhala and New Year shopping",
  "Black Friday shopping"
];

// Example items that could be searched and added
const shopItems = [
  { id: 1, name: 'Apples' },
  { id: 2, name: 'Bananas' },
  { id: 3, name: 'Bread' }
];

const ShoppingList = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedItems, setSelectedItems] = useState([]);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    setSelectedItems([]);
  };

  const handleCreate = () => {
    form.validateFields()
       .then((values) => {
         console.log('Received values of form: ', values, selectedItems);
         // Here you would handle the data submission to the backend
         setVisible(false);
       })
       .catch((info) => {
         console.log('Validate Failed:', info);
       });
  };

  const handleItemSelect = (value) => {
    const item = shopItems.find(item => item.id === value);
    if (!selectedItems.find(i => i.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleItemDeselect = (id) => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  return (
    <div>
         <AppHeader />  {/* Header Component */}
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
      <Input
        placeholder="Find your all notes"
        prefix={<SearchOutlined />}
        style={{ marginBottom: '20px' }}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginBottom: '20px', width: '100%' }}
        onClick={showModal}
      >
        Create a new list
      </Button>
      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[<DeleteOutlined style={{ color: 'red', fontSize: '16px' }} />]}
            style={{ borderRadius: '20px', marginBottom: '10px', background: '#f0f1f6', overflow: 'hidden' }}
          >
            {item}
          </List.Item>
        )}
      />
      <Modal
        title="Create a new List"
        visible={visible}
        onOk={handleCreate}
        onCancel={handleCancel}
        okText="Create New List"
        cancelText="Cancel"
      >
        <Form form={form} name="form_in_modal">
          <Form.Item
            name="title"
            label="Add title"
            rules={[{ required: true, message: 'Please input the title of the list!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="date" label="Date">
            <DatePicker />
          </Form.Item>
          <Form.Item name="searchItems" label="Search Items">
            <Select
              showSearch
              placeholder="Select an item"
              onSelect={handleItemSelect}
              onDeselect={handleItemDeselect}
              dropdownMatchSelectWidth={false}
              style={{ width: '100%' }}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {shopItems.map(item => (
                <Option key={item.id} value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <List
            size="small"
            header={<div>Selected Items</div>}
            bordered
            dataSource={selectedItems}
            renderItem={item => (
              <List.Item
                actions={[<Button type="link" onClick={() => handleItemDeselect(item.id)}>Remove</Button>]}
              >
                {item.name}
              </List.Item>
            )}
          />
        </Form>
      </Modal>
      
    </div>

    
    <AppFooter />  {/* Footer Component */}
    </div>
  );
  
};

export default ShoppingList;
