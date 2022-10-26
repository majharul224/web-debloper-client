import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Course = () => {
    return (
        <Container>
            <Row>
                <Col lg="9">
                    <h1>main</h1>
                </Col>
                <Col lg="3">
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;