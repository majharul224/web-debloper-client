import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CoursCard from '../CoursCard/CoursCard';
import ListItem from '../ListItem/ListItem';

const Course = () => {
    const courses = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg="9">
                    <h2>All course- {courses.length}</h2>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        {
                            courses.map(course=><CoursCard
                            key={course.id}
                            course={course}
                            >
                            </CoursCard>)
                        }
                    </div>
                </Col>
                <Col lg="3">
                  <ListItem 
                  course={courses}
                  ></ListItem>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;