// import React, { useEffect, useState } from 'react';
// import { ListGroup } from 'react-bootstrap';

const ListItem = ({course}) => {
    // console.log(course.name)
    
    return (
        <div>
              {/* <ListGroup>
                       
                       <ListGroup.Item>{course.name}</ListGroup.Item>
                     
                   </ListGroup> */}
              {
                course.map(c=><p>{c.name}</p>)
              }
        </div>
    );
};

export default ListItem;