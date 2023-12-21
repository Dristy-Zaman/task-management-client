// import React from 'react';

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>

            <div data-aos="fade-right">
            <div className="hero h-[500px] lg:w-[1280px] w-[420px] md:w-[760px]  mt-52 lg:mt-0 " style={{backgroundImage: 'url(./task2.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">


    <div className="max-w-md text-[#f3d37cf5] -ml-80">
      <h1 className="mb-5 -mt-28  text-5xl  font-bold">Task Identification
</h1>
<h1 className="mb-5 text-5xl font-bold">IN YOURSELF</h1>
      <p className="mb-5 font-semibold">Task management is the process of organizing and planning tasks to achieve a specific goal or project. </p>
      <button     className="btn btn-primary w-[200px] bg-[#f3d37cf5] border-0 hover:bg-[#f3d37cf5]  text-blue-950"><Link to="/addTask"> Let’s Explore </Link></button> 
      {/* <Link to="/login" className="btn mr-5">Login</Link> */}
    </div>


  </div>
</div>
            </div>






            














            
            


        </div>
    );
};

export default Banner;