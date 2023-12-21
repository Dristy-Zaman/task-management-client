// import React from 'react';

const ShowTaskRow = ({booking,handleDelete,handleBookingConfirm}) => {


    const {_id,name,email,age,imgURL,weekTime,dayTime,category}= booking;


   
           
           
           
            


    return (
                <div>

<thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Img URL</th>
                            <th>Week Time</th>
                            <th>Day Time</th>
                            <th>Category</th>
                            <th>Update Button</th>
                            <th>Delete Button</th>
                        </tr>
                    </thead>
                    

      {/* row 1 */}
      <tr>
       
      <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>{name}</th>
                            <th>{email}</th>
                            <th>{age}</th>
                            <th>{imgURL}</th>
                            <th>{weekTime}</th>
                            <th>{dayTime}</th>
                            <th>{category}</th>
                            <th><button onClick={() => handleBookingConfirm(_id)} className="bg-[#f3d37cf5] text-blue-950 p-3">Update</button></th>
                            <th><button onClick={()=> handleDelete(_id)} className="bg-[#f3d37cf5] text-blue-950 p-3">Delete</button></th>
      </tr>
      {/* row 2 */}
      {/* <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr> */}
      {/* row 3 */}
      {/* <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
   



    
            
        </div>
    );
};

export default ShowTaskRow;