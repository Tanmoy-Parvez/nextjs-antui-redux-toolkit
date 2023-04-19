import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    VideoCameraOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link href="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link href="/dashboard/admin">Admin</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: "100vh",
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default DashboardLayout;