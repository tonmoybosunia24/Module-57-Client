import { Link, NavLink } from "react-router";
import logo from '../../../assets/logo_220x.webp'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-toastify";

const Navber = () => {

       const {user, logOut} = useContext(AuthContext)
       const handleLogout = () => {
              logOut()
              .then(result => {
                     toast.success('Logout Successfull')
              })
              .catch(error => {
                     toast.error(error.message)
              })
       }

       const Links = <>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-black' : ' text-black'}`} to='/'>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-black' : 'text-black'}`} to='/allartcraft'>All Art & Craft</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-black' : 'text-black'}`} to='/addcraft'>Add Craft Item</NavLink></li>
              {user && ( <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-black' : 'text-black'}`} to='/myartcraft'>My Art & Craft</NavLink></li>
              )}
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-black' : 'text-black'}`} to='/login'>Login</NavLink></li>
              <li><NavLink className={({ isActive }) => `!bg-transparent ${isActive ? 'font-bold text-black' : 'text-black'}`} to='/register'>Register</NavLink></li>
       </>

       return (
              <div className="navbar lg:px-10 lg:h-20 sticky top-0 bg-white border-b z-20">
                     <div className="navbar-start">
                            <div className="dropdown">
                                   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                                          <svg
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="h-5 w-5"
                                                 fill="none"
                                                 viewBox="0 0 24 24"
                                                 stroke="currentColor">
                                                 <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6h16M4 12h8m-8 6h16" />
                                          </svg>
                                   </div>
                                   <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          {Links}
                                   </ul>
                            </div>
                            <img src={logo} className="w-32 lg:w-min" alt="" />
                     </div>
                     <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                   {Links}
                            </ul>
                     </div>
                     <div className="navbar-end">
                            <p className="mr-2">{user?.displayName}</p>
                            {
                                   user? <div> <button className="btn bg-[#b1b4a0] px-10 py-2 rounded-none" onClick={handleLogout}>Logout</button></div> : <Link to='/login'><button className="btn bg-[#b1b4a0] px-10 py-2 rounded-none">Login</button></Link>
                            }
                     </div>
              </div>
       );
};

export default Navber;