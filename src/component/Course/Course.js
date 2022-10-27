import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CoursCard from '../CoursCard/CoursCard';
import ListItem from '../ListItem/ListItem';

const Course = () => {
    const [courses, setCourse] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then( res => res.json())
        .then(data =>setCourse(data))
    },[])
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