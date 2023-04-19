import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
    HomeOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link href="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UploadOutlined />}>
                        Upload
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link href="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                        Video
                    </Menu.Item>
                </Menu>
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>

                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default RootLayout;