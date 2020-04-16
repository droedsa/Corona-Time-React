import React from "react";
import './loader.css';
import loader from './loader.png';

const Loader =()=>{
    return <div className='container d-flex justify-content-center align-items-center'>
        <img src={loader} alt=""/>
    </div>
};

export default Loader;