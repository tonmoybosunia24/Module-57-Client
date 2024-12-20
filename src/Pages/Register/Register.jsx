import { Link } from "react-router";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {

       const { createUser } = useContext(AuthContext)

       const handleSubmit = e => {
              e.preventDefault()
              const form = e.target
              const name = form.name.value;
              const photourl = form.photourl.value;
              const email = form.email.value;
              const password = form.password.value;
              const user = { name, photourl, email, password }
              createUser(email, password)
                     .then(result => {
                            toast.success('Account Created Successfully')
                            updateProfile(result.user, {
                                   displayName: name,
                                   photoURL: photourl,
                            })
                            fetch('http://localhost:5000/users', {
                                   method: 'POST',
                                   headers: {
                                          'Content-Type': 'application/json'
                                   },
                                   body: JSON.stringify(user)
                            })
                            .then(res => res.json())
                            .then(data => {
                                   console.log('Data Coming From Backend', data)
                            })
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
                                          <h1 className="text-3xl font-bold">Register now!</h1>
                                   </div>
                                   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                          <form onSubmit={handleSubmit} className="card-body w-96">
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Name</span>
                                                        </label>
                                                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">PhotoUrl</span>
                                                        </label>
                                                        <input type="text" name="photourl" placeholder="PhotoUrl" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Email</span>
                                                        </label>
                                                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control">
                                                        <label className="label">
                                                               <span className="label-text">Password</span>
                                                        </label>
                                                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                                 </div>
                                                 <div className="form-control mt-2">
                                                        <button className="btn bg-[#9ea18e] text-white">Submit</button>
                                                 </div>
                                                 <p className='text-sm text-center'>Already Have An Account? <Link to='/login'><span className='font-bold'>Login Now</span></Link></p>
                                          </form>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default Register;