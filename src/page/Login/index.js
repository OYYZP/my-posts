import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input ,Card,Dropdown, Menu, Space} from 'antd';
import { useNavigate } from 'react-router-dom';
// import { setToken } from '../utils/loacl_token';
import './index.scss'
const App = () => {
    const navigate = useNavigate()
  const onFinish = (values) => {
    setTimeout(()=>{navigate('/home')},1000)
    console.log(1);
  };
  return (
    <Card className='login_page' title='后台登录'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size='large' />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          size='large'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary"  htmlType="submit" className="login-form-button"size='large'>
          登录
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
    </Card>
  );
};
export default App;