

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import { Helmet } from "react-helmet-async";


const Login = () => {

  const { googleSignIn,signIn } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    // console.log(location)

    const handleGoogle=()=>{
      googleSignIn().then(result => {
        console.log(result.user);
      });
    };

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

            .catch(error => console.log(error))
                
  }





  return (
    <div>

{/* <Helmet>
        <title>Fitness | Login</title>
        
      </Helmet> */}

      <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2">
      
      <img className="w-[500px]  " src="./ab3.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <h1 className="text-5xl font-bold ml-5 text-[#eb7786]">Login now!</h1>
        <form onSubmit={handleLogin} >
          
        <div className="form-control"> 
          <label className="label">
            <span className="label-text text-[#eb7786] font-semibold">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#eb7786] font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-[#eb7786] font-semibold">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input className="btn btn-primary border-0 bg-[#eb7786] hover:bg-[#eb7786]  text-white " type="submit" value="Login" />

          <button onClick={handleGoogle}
className=" bg-[#eb7786] hover:bg-[#eb7786]   block mt-10 select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
type="button"
data-ripple-light="true"
>
Google Login
</button>
        </div>


        </form>
        <p className="text-center font-semibold">New account <Link className="text-[#eb7786] font-bold" to="/registration">Registration</Link></p>
      </form>
    </div>
  </div>
</div>
      </div>
      
    </div>
  );
};

export default Login;