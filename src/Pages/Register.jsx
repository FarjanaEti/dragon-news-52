import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {createNewUser,setUser}=useContext(AuthContext)

  const handleSubmit= (e)=>{
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("pass");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user)
       })
      .catch((err) => {
        console.log(err);
        // ..
      });
  };
  

  return (
    <div className='flex items-center justify-center min-h-screen'>
     <div className="card items-center bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
         <p className='font-semibold text-2xl my-3'>Register Form</p>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your name" className="input input-bordered"  />
        </div><div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='url' placeholder="Photo url" className="input input-bordered" />
        </div>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Register</button>
        </div>
        <p>Already have n account's? <Link className='text-lime-700' to='/auth/login'>Login</Link></p>
      </form>
    </div>                         
  </div>
 );
};

export default Register;