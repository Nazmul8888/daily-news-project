import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(signIn);




    const handelLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            console.log(result.user);

            navigate(location?.state ? location.state : '/');
        })
        .catch(error=>{
            console.log(error);
        })

        





    }
    return (
        <div>
            <Navbar></Navbar>

            <div>
            <h2 className="text-3xl my-10 text-center">Login Your Account</h2>
            <form onSubmit={ handelLogin} className="md:w-3/4 lg: w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <p className="text-center mt-4 ">Do not have a Account? Please <Link className="tex-blue-600 font-bold" to='/register'>Register</Link></p>

            </div>
         






         
        </div>
    );
};

export default Login;