import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

    const {user,logout}= useContext(AuthContext);
console.log(user);
const handleLogout=()=>{
    logout().then()
}

    

    return (
        <>


          <div>
          <div>

<div data-aos="fade-down">

<div className="navbar  h-28 mb-4  bg-[#f7d5779f]">
<div className="navbar-start">
<div className="dropdown">
<label tabIndex={0} className="btn btn-ghost lg:hidden">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</label>
<ul tabIndex={0} className=" bg-[#f7d5779f] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 ">
<li className="text-lg font-semibold ml-5 text-blue-950  "><Link to="/">Home</Link></li>
<li className="text-lg font-semibold text-blue-950  "><Link to="/addTask">Add Task</Link></li>
<li className="text-lg font-semibold text-blue-950 "><Link to="/showTask"> Show Task</Link></li>
{/* <li className="text-lg font-semibold text-blue-950 "><Link to="/classes">Classes</Link></li> */}

</ul>
</div>
<Link to="/" className="btn btn-ghost normal-case text-xl"><img className="w-36 -mt-5 "  src="./logo2.png" /></Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1 ">
<li className="text-lg  font-semibold text-blue-950  " ><Link to="/">Home</Link></li>
<li className="text-lg font-semibold text-blue-950 " ><Link to="/addTask">Add Task</Link></li>
<li className="text-lg font-semibold text-blue-950 "><Link to="/showTask">Show Task</Link></li>
{/* <li className="text-lg font-semibold text-blue-950 "><Link to="/classes">Classes</Link></li> */}

</ul>
</div>
<div className="navbar-end lg:mt-0 md:mt-0 mt-48 -ml-10 lg:-ml-0">
<Link to="/login" className="btn mr-5">Login</Link>
<Link to="/registration" className="btn">Registration</Link>
</div>

<div className="flex justify-center items-center flex-col  md:flex-row lg:flex-row lg:mt-0 md:mt-0 md:-ml-0 lg:-ml-0 mt-96 -ml-60 " >
<p className="font-medium text-xl mr-3 ">{user?.email}</p>
    <p className="font-medium text-xl mr-3">{user?.displayName}</p>

    <img className="w-[50px] h-[50px] rounded-full mr-3" src={user?.photoURL} alt="" />

{
        user &&  <button onClick={handleLogout} className=" btn bg-pink-500  text-white  ">Logout</button>
    }
</div>
</div>
</div>

</div>
          </div>



        </>
    );
};

export default NavBar;