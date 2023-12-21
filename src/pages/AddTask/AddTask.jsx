// import React from 'react';

import Swal from "sweetalert2";

const AddTask = () => {

    const handleBeATrainer = event =>{

        event.preventDefault();
    
        const form = event.target;
    
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const imgURL = form.imgURL.value;
        const weekTime = form.name.value;
        const dayTime = form.email.value;
        const category = form.category.value;
        
    
        
    
        // const newProduct = { price, deadline, email, buyerEmail}
    
        // console.log(newProduct);
    
        const BeATrainer = {
    
            name,
            email,
            age,
            imgURL,
            weekTime,
            dayTime,
            category, 
            
        }
        console.log(BeATrainer);
    
    
        fetch('http://localhost:5000/task', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(BeATrainer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                // alert(' successfully Done')
                Swal.fire({
                    title: "Good job!",
                    text: "successfully Done!",
                    icon: "success"
                  });
            }
        })
    
    
    
    
    }

















    return (
        <div>

        
        
        
                    <div className="mt-52 lg:mt-0 ">
        
                    <h1 className=" my-20 text-blue-950 font-bold text-center text-3xl">--------- Add a Task ---------</h1>
                       
                    <div className="bg-[#F4F3F0] p-24">
                    
                    <form onSubmit={handleBeATrainer}>
                        
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-blue-950 ">Full Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-blue-950">  Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
        
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-blue-950"> Age</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="age" placeholder=" Age" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-blue-950"> Profile Image URL
        </span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="imgURL" placeholder=" Profile Image
        " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                       
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-blue-950">Available Task in a week</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="weekTime" placeholder="Available Time in a week" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-blue-950">Available Task in a Day</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="dayTime" placeholder="Available Time in a Day" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
        
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-blue-950">Skill</span>
                                </label>
                                <label className="input-group">
                                    {/* <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" /> */}
                                    <select className="select select-bordered w-full max-w-xs" name="category" >
          <option disabled selected> Choice Skill</option>
          <option>Program Designer</option>
          <option>Nutritional Guidance</option>
          <option>Equipment Maintenance</option>
          <option>Client Interaction</option>
        </select>
                                </label>
                            </div>
                            
                        </div>
                        
                        
                        <input type="submit" value=" Applied" className="btn text-lg btn-block bg-[#f7d5779f] hover:bg-[#f7d5779f]  text-blue-950" />
        
                    </form>
                </div>
                    </div>
                </div>
    );
};

export default AddTask;