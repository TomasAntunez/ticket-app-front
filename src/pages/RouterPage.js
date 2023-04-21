import { useContext } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from 'react-router-dom';

import { UiContext } from '../context/UiContext';

import Enter from './Enter';
import Line from './Line';
import CreateTicket from './CreateTicket';
import Desk from './Desk';


const { Sider, Content } = Layout;


const RouterPage = () => {

    const { hiddenMenu } = useContext( UiContext );


    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider
                    collapsedWidth='0'
                    breakpoint='md'
                    hidden={ hiddenMenu }
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: <Link to="/enter">Enter</Link>
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: <Link to="/line">Line</Link>
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: <Link to="/create">Create ticket</Link>
                            }
                        ]}
                    />
                </Sider>

                <Layout className="site-layout">
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280
                        }}
                    >
                        <Routes>
                            <Route path='/enter' element={ <Enter /> } />
                            <Route path='/line' element={ <Line /> } />
                            <Route path='/create' element={ <CreateTicket /> } />
                            <Route path='/desk' element={ <Desk /> } />

                            <Route index element={ <Navigate to="/enter" /> } />

                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

 
export default RouterPage;