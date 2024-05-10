import React, { useEffect, useState } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { getUsers, deleteUser } from '../../apicalls/users';
 // API calls to be implemented

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data.users); // adjust based on actual API response structure
    } catch (error) {
      message.error('Failed to fetch users: ' + error.message);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await deleteUser(userId);
      if (response.success) {
        message.success('User deleted successfully');
        fetchUsers(); // Refresh the list after delete
      } else {
        message.error('Failed to delete user');
      }
    } catch (error) {
      message.error('Deletion failed: ' + error.message);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record.id)}>Edit</Button>
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleEdit = (userId) => {
    // Placeholder for edit functionality
    message.info('Edit functionality not implemented yet');
  };

  return (
    <Table dataSource={users} columns={columns} rowKey="id" />
  );
};

export default UserTable;

