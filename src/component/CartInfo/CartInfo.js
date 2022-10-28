import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const CartInfo = () => {
    const courses = useLoaderData();
    const{img,name,price,ditels}=courses
    const ref = React.createRef();

    return (
        // pdf button
        <div>
            <div className='w-50 m-auto'>
            <Pdf targetRef={ref} filename="div-blue.pdf">

        {({toPdf}) => (
            <button type="button" className="btn btn-primary" onClick={toPdf}>Generate pdf</button>
        )}
    </Pdf>
    <div style={{width: 100, height: 100, background: '#fff'}} ref={ref}/>
            </div>

            {/* // course card */}

            <div className='w-50 ms-auto'>
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
        </div>
    );
};

export default CartInfo;