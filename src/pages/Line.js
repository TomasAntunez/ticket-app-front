import { useContext, useEffect, useState } from 'react';
import { Typography, Row, Col, List, Card, Tag, Divider } from 'antd';

import { useUi } from '../hooks/useUi';
import { SocketContext } from '../context/SocketContext';
import { getLastTickets } from '../helpers/getLastTickets';

const { Title, Text } = Typography;


const Line = () => {

    useUi(true);

    const { socket } = useContext( SocketContext );
    const [ tickets, setTickets ] = useState([]);

    useEffect( () => {
        getLastTickets().then( (tickets) => setTickets(tickets) );
    }, []);

    useEffect( () => {
        socket.on( 'assigned-ticket', (assignedTickets) => {
            setTickets( assignedTickets );
        });

        return () => {
            socket.off('assigned-ticket');
        }
    }, [socket]);

    return (
        <>
            <Title level={ 1 }>
                Serving the client
                <Row>
                    <Col span={ 12 }>
                        <List
                            dataSource={ tickets.slice(0, 3) }
                            renderItem={ (item) => (
                                <List.Item>
                                    <Card
                                        style={{ width: 300, marginTop: 16 }}
                                        actions={[
                                            <Tag color="volcano">{ item.agent }</Tag>,
                                            <Tag color="magenta"> Desk: { item.desk } </Tag>
                                        ]}
                                    >
                                        <Title> Number: { item.number } </Title>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Col>

                    <Col span={ 12 }>
                        <Divider> Historic </Divider>

                        <List
                            dataSource={ tickets.slice(3) }
                            renderItem={ (item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={`Ticket number: ${ item.number }`}
                                        description={
                                            <>
                                                <Text type='secondary'>On the desk: </Text>
                                                <Tag color='magenta'>{ item.desk }</Tag>
                                                <Text type='secondary'>Agent: </Text>
                                                <Tag color='volcano'>{ item.agent }</Tag>
                                            </>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Title>
        </>
    );
};
 

export default Line;