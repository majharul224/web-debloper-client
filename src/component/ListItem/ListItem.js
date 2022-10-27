// import React, { useEffect, useState } from 'react';
// import { ListGroup } from 'react-bootstrap';

import { Link } from "react-router-dom";

const ListItem = ({course}) => {
    // console.log(course.name)
    
    return (
        <div>
              {
                course.map(c=><Link >
                <p>{c.name}</p>
                </Link>)
              }
        </div>
    );
};

export default ListItem;