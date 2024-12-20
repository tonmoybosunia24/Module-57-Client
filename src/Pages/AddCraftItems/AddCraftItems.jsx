import { useContext } from "react";
import Navber from "../Shared/Navber/Navber";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProviders";

const AddCraftItems = () => {

       const {user} = useContext(AuthContext)

       const hanldeAddCraft = e => {
              e.preventDefault()
              const form = e.target;
              const photoURL = form.photoUrl.value;
              const ItemName = form.itemName.value;
              const SubCategoryName = form.subcategoryName.value;
              const ShortDescription = form.shortDescription.value;
              const Price = form.price.value;
              const Rating = form.rating.value;
              const ProcessTime = form.processTime.value;
              const StockStatus = form.stockStatus.value;
              const Customization = form.radio.value;
              const email = form.email.value;
              const name = form.name.value;
              const CraftItem = { photoURL, ItemName, SubCategoryName, ShortDescription, Price, Rating, ProcessTime, StockStatus, Customization, email, name }
              console.log(CraftItem)
              fetch('http://localhost:5000/craftitem', {
                     method: 'POST',
                     headers: {
                            'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(CraftItem)
              })
              .then(res => res.json())
              .then(data => {
                     console.log('Data Coming From Server', data)
                     Swal.fire({
                            title: "Good job!",
                            text: "Your Craft Item Added Successfully",
                            icon: "success"
                     });
                     // form.reset()
              })
       }

       return (
              <div>
                     <Navber></Navber>
                     <div>
                            <form onSubmit={hanldeAddCraft} className="lg:px-10" >
                                   <div className="grid grid-cols-2 gap-5 lg:pt-10">
                                          <div>
                                                 <label>Add Image:</label> <br />
                                                 <input className="w-full border-2 p-2" type="text" name="photoUrl" placeholder="Input Your Imgae Link" id="" />
                                          </div>
                                          <div>
                                                 <label>Item Name:</label> <br />
                                                 <input className="w-full border-2 p-2" type="text" name="itemName" placeholder="Input Your Item Name" id="" />
                                          </div>
                                          <div>
                                                 <label>Subcategory Name:</label> <br />
                                                 <input className="w-full border-2 p-2" type="text" name="subcategoryName" placeholder="Input Your Subcategory Name" id="" />
                                          </div>
                                          <div>
                                                 <label>Short Description:</label> <br />
                                                 <input className="w-full border-2 p-2" type="text" name="shortDescription" placeholder="Input Your Short Description" id="" />
                                          </div>
                                          <div>
                                                 <label>Price:</label> <br />
                                                 <input className="w-full border-2 p-2" type="number" name="price" placeholder="Input Your Price" id="" />
                                          </div>
                                          <div>
                                                 <label>Rating:</label> <br />
                                                 <input className="w-full border-2 p-2" type="text" name="rating" placeholder="Input Your Rating" id="" />
                                          </div>
                                          <div>
                                                 <label>Processing Time:</label> <br />
                                                 <input className="w-full border-2 p-2" type="date" name="processTime" placeholder="Input Your Processing Time" id="" />
                                          </div>
                                          <div>
                                                 <label>Stock Status:</label> <br />
                                                 <select className="w-full border-2 p-2" name="stockStatus" id="">
                                                        <option>In Stock</option>
                                                        <option>Make To Order</option>
                                                 </select>
                                          </div>
                                          <div>
                                                 <label>Customization:</label> <br />
                                                 <div className="w-full border-2 flex items-center gap-2 p-2">
                                                        <input type="radio" name="radio" className="radio" defaultChecked /> <span>Yes</span>
                                                        <input type="radio" name="radio" className="radio" /> <span>No</span>
                                                 </div>
                                          </div>
                                          <div>
                                                 <label>User Email:</label> <br />
                                                 <input className="w-full border-2 p-2" type="email" value={user.email} name="email" placeholder="Input Your Email" id="" />
                                          </div>
                                          <div>
                                                 <label>User Name:</label> <br />
                                                 <input className="w-full border-2 p-2" type="text" name="name" placeholder="Input Your Name" id="" />
                                          </div>
                                   </div>
                                   <input className="bg-[#9ea18e] w-full py-3 my-5" type="submit" value="Add Craft Item" />
                            </form>
                     </div>
              </div>
       );
};

export default AddCraftItems;