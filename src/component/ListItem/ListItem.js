// import React, { useEffect, useState } from 'react';
// import { ListGroup } from 'react-bootstrap';

import { Link } from "react-router-dom";

const ListItem = ({course}) => {
    console.log(course[1])
    
    return (
        <div>
              {
                course.map(c=><Link to={`/course/${c.id}`}>
                <p>{c.name}</p>
                </Link>)
              }
        </div>
    );
};

export default ListItem;