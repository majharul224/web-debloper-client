import React from 'react';

const CoursCard = ({ course }) => {
    const { name, img, price, ditels } = course
    // console.log(course)
    return (
        <div>
            <img src={img?.img} alt="" />
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">price :${price}</h4>
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">{ditels}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default CoursCard;