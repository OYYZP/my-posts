import React, { useState } from 'react';
import './index.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu,Dropdown } from 'antd';
const { Header, Sider, Content } = Layout;
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  function handleMenuClick(){
    
  }
  const items = [
    { label: '消息', key: 'message' },
    { label: '设置', key: 'setting' },
    { label: '退出登录', key: 'log_out' }
  ]
  return (
    <Layout className='main_page'>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">logo</div>
        <Menu
          // theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '主页',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            backgroundColor: 'rgb(202, 207, 216)',
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: (e) => setCollapsed(!collapsed),
          })}
          <i className='w'></i>
          <Dropdown menu={{ items, onClick: handleMenuClick }} name='admin'>
            <b><UserOutlined />超级管理</b>
          </Dropdown>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '10px 16px 0  16px',
            padding: '15px 15px 0 15px',
            minHeight: 280,
          }}
        >
          Content
          
        </Content>
        <span className='autograph'>2022@OY😀</span>
      </Layout>
    </Layout>
  );
};
export default Home;