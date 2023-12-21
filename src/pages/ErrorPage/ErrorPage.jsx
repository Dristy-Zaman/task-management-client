// import React from 'react';

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>

        
                    <div className=" h-screen flex justify-center items-center ">
                        
                        <div className="text-center">
        
                        <img className=" w-[700px] h-[500px] "  src="./404.gif" />
                 
        <p className="text-6xl mb-10 mt-20">OPPS! PAGE NOT BE FOUND</p>
        
        
        
        
        <button className=" ">
        
        <Link to="/" 
        
        className="ml-1 -mt-52 block font-sans text-4xl font-bold leading-normal text-orange-400 antialiased label-text-alt link link-hover"
        >
        
        Back to Home Page
        </Link>
            
            
            
           </button>
                        </div>
                </div>
                </div>
    );
};

export default ErrorPage;