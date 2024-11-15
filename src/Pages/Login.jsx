import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from './Loading';

const Login = () => {
  const { userLogin, setUser,loading} = useContext(AuthContext);
  const [error,setError]=useState({});
  const location=useLocation();
  console.log(location)
  const navigate=useNavigate();

   //loading
    if(loading){
      return <Loading></Loading>
    }

  //form login
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;
    // console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => {
       console.log(err.code)
       setError({ ...error, login: err.code });
      });
  };

 return (
  <div className='flex items-center justify-center min-h-screen'>
     <div className="card items-center bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
         <p className='font-semibold text-2xl my-3'>LogIn Form</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
           {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )} 
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Don't have an account's? <Link className='text-lime-700' to='/auth/register'>Register</Link></p>
      </form>
    </div>                         
  </div>
 );
};

export default Login;