import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { Link } from "react-router";
import Swal from 'sweetalert2'

const MyCraftItem = ({ MyCraft, MyCrafts, setMyCraft }) => {

       const { _id, name, email, Customization, StockStatus, ProcessTime, Rating, Price, ShortDescription, SubCategoryName, ItemName, photoURL } = MyCraft;

       const handleDelete = id => {
              Swal.fire({
                     title: "Are you sure?",
                     text: "You won't be able to revert this!",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                     if (result.isConfirmed) {
                            fetch(`http://localhost:5000/craftitem/${id}`, {
                                   method: 'DELETE',
                            })
                                   .then(res => res.json())
                                   .then(data => {
                                          console.log(console.log(data))
                                          Swal.fire({
                                                 title: "Deleted!",
                                                 text: "Your file has been deleted.",
                                                 icon: "success"
                                          });
                                          const remaining = MyCrafts.filter(RemainingCraft => RemainingCraft._id !== id)
                                          setMyCraft(remaining)
                                   })
                     }
              });
       }

       return (
              <div className="flex flex-col lg:flex-row items-center gap-5 p-5 border-2">
                     <div>
                            <div><img className="w-96" src={photoURL} alt="" /></div>
                     </div>
                     <div>
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                            <p>ItemName: {ItemName}</p>
                            <p>SubCategory: {SubCategoryName}</p>
                            <p>ShortDescription: {ShortDescription}</p>
                            <p>StockStatus: {StockStatus}</p>
                            <p>ProcessTime: {ProcessTime}</p>
                            <p>Rating: {Rating}</p>
                            <p>Price: {Price}</p>
                            {Customization ? <p>Customization: Yes</p> : <p>Customization: No</p>}
                     </div>
                     <div>
                            <div className="join lg:join-vertical join-horizontal gap-3 rounded-none">
                                   <button onClick={() => handleDelete(_id)} className="btn join-item"><AiFillDelete className="text-2xl" /></button>
                                   <Link to={`/updatecraft/${_id}`}><button className="btn join-item"><CiEdit className="text-2xl" /></button></Link>
                                   <Link to={`/viewdetails/${_id}`}><button className="btn join-item"><CiViewList className="text-2xl" /></button></Link>
                            </div>
                     </div>
              </div>
       );
};

export default MyCraftItem;