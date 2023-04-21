import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography, Divider } from "antd"

import { useUi } from '../hooks/useUi';

const { Title, Text } = Typography;


const Desk = () => {

    useUi(false);

    const exit = () => {
        console.log('exit');
    };

    const nextTicket = () => {
        console.log('nextTicket');
    };


    return (
        <>
            <Row>
                <Col span={ 20 }>
                    <Title level={ 2 }>Tomas</Title>
                    <Text>You are working at desk </Text>
                    <Text type="success">5</Text>
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

            <Row>
                <Col>
                    <Text>You are dealing with ticket number: </Text>
                    <Text
                        style={{ fontSize: 30 }}
                        type="danger"
                    >
                        55
                    </Text>
                </Col>
            </Row>

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