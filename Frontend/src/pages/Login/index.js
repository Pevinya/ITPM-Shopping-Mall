import React from 'react';
import { Form, Input } from "antd";  //import components from ant deign;
import Button from '../../Components/Button';
import { Link } from 'react-router-dom'; 

function Login() {
  const onFinish = (values) => {
    console.log("success:" , values);
  }

  return (
    <div className='h-screen bg-primary flex items-center justify-center'>
      <div className='authentication-form bg-white p-3'>
        <h1 className="text-secondary text-2xl font-bold mb-1"> 
            PINNACLE ARCADE - LOGIN
        </h1>
        <hr></hr>
        <Form layout="vertical"
         onFinish={onFinish}
         className='mt-1'
        >
          <Form.Item
            label = "Email"
            name = "email"
          >
            <Input type='email' placeholder='Email' />
          </Form.Item>
          <Form.Item
            label = "Password"
            name = "password"
          >
            <Input type='password' placeholder='Password' />
          </Form.Item>

          <Button title = "Register" type = "submit"
          color  ="secondary" 
          />       
          <div className = "text-center mt-2">
            <Link to ="/register"
            className='text-primary text-sm underline'
            > Don't have an account? Click here to Register</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login