import { useContext, useState } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { useUi } from '../hooks/useUi';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;


const CreateTicket = () => {

    useUi(true);

    const { socket } = useContext( SocketContext );
    const [ ticket, setTicket ] = useState(null);

    const newTicket = () => {
        socket.emit( 'request-ticket', null, (ticket) => {
            setTicket( ticket )
        });
    };


    return (
        <>
            <Row>
                <Col span={ 14 } offset={ 6 } align='center'>
                    <Title level={ 3 }>
                        Press the button for a new ticket
                    </Title>

                    <Button
                        type='primary'
                        shape='round'
                        icon={ <DownloadOutlined /> }
                        size='large'
                        onClick={ newTicket }
                    >
                        New Ticket
                    </Button>
                </Col>
            </Row>

            {
                ticket && (
                    <Row style={{ marginTop: 100 }}>
                        <Col span={ 14 } offset={ 6 } align='center'>
                            <Text level={ 2 }>
                                Your number
                            </Text>
        
                            <br />
        
                            <Text type="success" style={{ fontSize: 55 }}>
                                { ticket.number }
                            </Text>
                        </Col>
                    </Row>
                )
            }
        </>
    );
};

 
export default CreateTicket;