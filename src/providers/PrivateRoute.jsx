// import React from 'react';

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    console.log(user);

    if(user){
         return children;

    }
    return <Navigate to="/login" replace></Navigate>


    
    
  

    // return (
    //     <div>
            
    //     </div>
    // );
};

export default PrivateRoute;