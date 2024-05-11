import React from 'react';
import { Form, Input, message } from "antd";
import Button from '../../Components/Button';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { LoginUser } from '../../apicalls/users';

function Login() {
  const navigate = useNavigate(); // Initialize navigate function

  const onFinish = async(values) => {
    try {
      console.log(values); // Log values for debugging
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data.token); // Assuming token is stored in response.data.token
        // Conditional navigation based on the user role
        if (response.data.role === 'admin') {
          navigate('/adminhome'); // Navigate to admin dashboard
        } else {
          navigate('/home'); // Navigate to user home
        }
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  }

  return (
    <div className='h-screen bg-primary flex items-center justify-center'>
      <div className='authentication-form bg-white p-3'>
        <h1 className="text-secondary text-2xl font-bold mb-1"> 
            PINNACLE ARCADE - LOGIN
        </h1>
        <hr></hr>
        <Form layout="vertical" onFinish={onFinish} className='mt-1'>
          <Form.Item label="Email" name="email">
            <Input type='email' placeholder='Email' />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password' placeholder='Password' />
          </Form.Item>

          <Button title="Login" type="submit" color="secondary" />       
          <div className="text-center mt-2">
            <Link to="/register" className='text-primary text-sm underline'>
              Don't have an account? Click here to Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login;
