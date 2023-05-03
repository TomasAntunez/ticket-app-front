import { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography, Divider } from "antd"

import { useUi } from '../hooks/useUi';
import { getUserStorage } from '../helpers/getUserStorage';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;


const Desk = () => {

    useUi(false);

    const navigate = useNavigate();

    const [ user ] = useState( getUserStorage() );
    const { socket } = useContext( SocketContext );
    const [ ticket, setTicket ] = useState(null);

    const exit = () => {
        localStorage.removeItem('agent');
        localStorage.removeItem('deks');
        navigate('/enter');
    };

    const nextTicket = () => {
        socket.emit( 'next-ticket-work', user, (ticket) => {
            setTicket( ticket );
        });
    };


    if ( !user.agent || !user.desk ) {
        return <Navigate to='/enter' />;
    }


    return (
        <>
            <Row>
                <Col span={ 20 }>
                    <Title level={ 2 }>{ user.agent }</Title>
                    <Text>You are working at desk </Text>
                    <Text type="success">{ user.desk }</Text>
                </Col>

                <Col span={ 4 }>
                    <Button
                        shape="round"
                        type="primary"
                        danger
                        onClick={ exit }
                    >
                        <CloseCircleOutlined />
                        Exit
                    </Button>
                </Col>
            </Row>

            <Divider />

            {
                ticket && (
                    <Row>
                        <Col>
                            <Text>You are dealing with ticket number: </Text>
                            <Text
                                style={{ fontSize: 30 }}
                                type="danger"
                            >
                                { ticket.number }
                            </Text>
                        </Col>
                    </Row>
                )
            }

            <Row>
                <Col offset={ 20 } span={ 4 } aling="right">
                    <Button
                        onClick={ nextTicket }
                        shape="round"
                        type="primary"
                    >
                        <RightOutlined />
                        Next
                    </Button>
                </Col>
            </Row>
        </>
    );
};
 

export default Desk;