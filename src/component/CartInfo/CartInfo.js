import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CartInfo = () => {
    const courses = useLoaderData();
    const{img,name,price,ditels}=courses
    return (
        <div>
            <img src={img?.img} alt="" />
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">price :${price}</h4>
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">{ditels}</p>
                </div>
            </div>
        </div>
    );
};

export default CartInfo;