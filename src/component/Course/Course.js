import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Course = () => {
    const [course, setCourse] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then( res => res.json())
        .then(data =>setCourse(data))
    },[])
    return (
        <Container>
            <Row>
                <Col lg="9">
                    <h2>All course- {course.length}</h2>
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