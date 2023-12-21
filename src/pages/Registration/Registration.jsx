
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import { Helmet } from 'react-helmet-async';


const Registration = () => {

    const { googleSignIn,createUser } = useContext(AuthContext);
    

    const handleGoogle=()=>{
        googleSignIn().then(result => {
          console.log(result.user);
        });
      };

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgURL = form.imgURL.value;
        console.log(name, email, password,imgURL)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }

    return (
        <div>

{/* <Helmet>
        <title>Fitness | Registration</title>
        
      </Helmet> */}
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    {/* <img className="w-[500px] h-[500px] " src="./ab1.webp" alt="" /> */}
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-[#eb7786] ">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#eb7786] font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#eb7786] font-semibold">Img URL</span>
                                </label>
                                <input type="text" name='imgURL' placeholder="imgURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#eb7786] font-semibold">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#eb7786] font-semibold">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-[#eb7786] font-semibold">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary bg-[#eb7786] hover:bg-[#eb7786]  text-white border-0" type="submit" value="Sign Up" />

                                <button onClick={handleGoogle}
className="block  mt-10  select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
type="button"
data-ripple-light="true"
>
Google Login
</button>


                            </div>
                        </form>
                        <p className='my-4 text-center font-semibold'>Already Have an Account? <Link className='text-[#eb7786] font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Registration;