import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userDefaultPic from '../assets/assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const {user,logOut }=useContext(AuthContext)
     console.log(user) 
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
</>                        
    return (
  <div className="navbar bg-base-100">
    <div>{user && user.email}</div>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {/* <img src={userDefaultPic} /> */}
                        {user && user?.email ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userDefaultPic} alt="" />
          )}
                    </div>
                </label>
                {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
             {/* <Link to='/auth/login' className="btn">Login</Link> */}
            </div>
        </div>
    );
};


export default Navbar;