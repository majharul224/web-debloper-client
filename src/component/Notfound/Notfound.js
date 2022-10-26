import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'
const Notfound = () => {
    return (
        <div className='notfound-container'>
        <h1>404</h1>
        <h3>OPPS! PAGE NOT FOUND</h3>
        <h5>sorry, the page you're looking for doesn't exist.If you think something is broken report a problem.</h5>
        <button className='btn-grad'><Link to='/'>Home Page</Link></button>
    </div>
    );
};

export default Notfound;