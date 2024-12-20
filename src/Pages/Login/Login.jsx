import 'react-toastify/dist/ReactToastify.css';
import Navber from "../Shared/Navber/Navber";
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {

       const {signInUser} = useContext(AuthContext)
       const navigate = useNavigate()
       const location = useLocation()
       console.log('Try To Find The Location', location)

       const handleLogin = e => {
              e.preventDefault()
              const form = e.target;
              const email = form.email.value;
              const password = form.password.value;
              signInUser(email, password)
              .then(result => {
                     toast.success('Login Successfull')
                     navigate(location?.state ? location?.state : '/')
              })
              .catch(error => {
                     toast.error(error.message)
              }) 
       }

       return (
              <div>
                     <Navber></Navber>
                     <div className="hero lg:mt-5">
                            <div className="hero-content flex-col">
                                   <div className="text-center lg:text-left">
                                          <h1 className="text-3xl font-bold">Login now!</h1>
                                   </div>
                                   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                          <form onSubmit={handleLogin} className="card-body w-80">
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Email</span>
                                                        </label>
                                                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Password</span>
                                                        </label>
                                                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                                        <label className="label">
                                                               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                        </label>
                                                 </div>
                                                 <div className="form-control">
                                                        <button className="btn bg-[#9ea18e] text-white">Login</button>
                                                 </div>
                                                 <p className='text-sm text-center'>Don't Have An Account? <Link to='/register'><span className='font-bold'>Register Now</span></Link></p>
                                          </form>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default Login;