import React from 'react';
import "./ThemeToggle.css"
const ThemeToggle = () => {
    return (
        <div className='ms-4'>
             <input type="checkbox" id="switch" />
               <label for="switch"> toggle</label> 
        </div>
    );
};

export default ThemeToggle;