// import React from 'react';


import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import ShowTaskRow from "./ShowTaskRow";

const ShowTask = () => {



    const [addInfo, setAddInfo] = useState([]);

    const url ="http://localhost:5000/task";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddInfo(data))

        
        

    }, []);

    const handleDelete = id => {
        const proceed = confirm
        // ('Are You sure you want to delete');
        Swal.fire({
            title: "Good job!",
            text: "Are You sure you want to delete",
            icon: "question"
          });
        if (proceed) {
            fetch(`http://localhost:5000/task/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        // alert('deleted successful');

                        Swal.fire({
                            title: "Good job!",
                            text: "You want to delete?",
                            icon: "question"
                          });
                        const remaining = addInfo.filter(booking => booking._id !== id);
                        setAddInfo(remaining);
                        // Swal.fire({
                        //     title: "Good job!",
                        //     text: remaining,
                        //     icon: "success"
                        //   });
                    }
                })
        }
    }


    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = addInfo.filter(booking => booking._id !== id);
                    const updated = addInfo.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setAddInfo(newBookings);
                }
            })
    }










    return (
        <div className="mt-64 lg:mt-0">

        {/* <h2>your post : {addInfo.length}</h2> */}

        <h2 className="text-5xl my-10 text-center font-semibold text-blue-950">Show Task: {addInfo.length}</h2>
        <div className="overflow-x-auto w-full">
            <table className="table table-xs  md:table-md w-full">
                {/* head */}

                {/* <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Email</th>
                        <th>Job Title</th>
                        <th>Deadline</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Minimum price</th>
                        <th>Maximum price</th>
                    </tr>
                </thead> */}
                
                <tbody>
                    {
                        addInfo.map(booking => <ShowTaskRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                            ></ShowTaskRow>)
                    }
                </tbody>

            </table>


        </div>

        
        
    </div>
    );
};

export default ShowTask;