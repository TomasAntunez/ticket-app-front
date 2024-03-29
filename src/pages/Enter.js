import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import { useUi } from '../hooks/useUi';
import { getUserStorage } from '../helpers/getUserStorage';

const { Title, Text } = Typography;


const Enter = () => {

    useUi(false);

    const navigate = useNavigate();

    const [ user ] = useState( getUserStorage() );

    const onFinish = ({ agent, desk }) => {

        localStorage.setItem( 'agent', agent );
        localStorage.setItem( 'desk' , desk );

        navigate('/desk');
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    if ( user.agent && user.desk ) {
        return <Navigate to='/desk' />;
    }


    return (
        <>
            <Title level={ 2 }>Enter</Title>
            <Text>Enter your name and desk number</Text>

            <Divider />

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 700
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Agent name"
                    name="agent"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            
                <Form.Item
                    label="Desk"
                    name="desk"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your desk number!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={ 99 } />
                </Form.Item>
            
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        shape='round'
                    >
                        <SaveOutlined />
                        Enter
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};


export default Enter;