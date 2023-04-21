import { Typography, Row, Col, List, Card, Tag, Divider } from 'antd';

import { useUi } from '../hooks/useUi';

const { Title, Text } = Typography;


const data = [
    {
        ticketNumber: 33,
        desk: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNumber: 34,
        desk: 4,
        agent: 'Melissa Flores'
    },
    {
        ticketNumber: 35,
        desk: 5,
        agent: 'Carlos Castro'
    },
    {
        ticketNumber: 36,
        desk: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNumber: 37,
        desk: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNumber: 38,
        desk: 2,
        agent: 'Melissa Flores'
    },
    {
        ticketNumber: 39,
        desk: 5,
        agent: 'Carlos Castro'
    },
];


const Line = () => {

    useUi(true);

    return (
        <>
            <Title level={ 1 }>
                Serving the client
                <Row>
                    <Col span={ 12 }>
                        <List
                            dataSource={ data.slice(0, 3) }
                            renderItem={ (item) => (
                                <List.Item>
                                    <Card
                                        style={{ width: 300, marginTop: 16 }}
                                        actions={[
                                            <Tag color="volcano">{ item.agent }</Tag>,
                                            <Tag color="magenta"> Desk: { item.desk } </Tag>
                                        ]}
                                    >
                                        <Title> Number: { item.ticketNumber } </Title>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Col>

                    <Col span={ 12 }>
                        <Divider> Historic </Divider>

                        <List
                            dataSource={ data.slice(3) }
                            renderItem={ (item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={`Ticket number: ${ item.ticketNumber }`}
                                        description={
                                            <>
                                                <Text type='secondary'>On the desk: </Text>
                                                <Tag color='magenta'>{ item.ticketNumber }</Tag>
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