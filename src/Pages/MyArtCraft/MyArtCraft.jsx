import { useContext, useState } from "react";
import Navber from "../Shared/Navber/Navber";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData } from "react-router";
import MyCraftItem from "./MyCraftItem";

const MyArtCraft = () => {
       const AllCraft = useLoaderData();
       const { user } = useContext(AuthContext);

       const FilterCraft = AllCraft.filter(Craft => Craft.email === user.email);
       const [MyCrafts, setMyCraft] = useState(FilterCraft);

       const handleSort = e => {
              const sortType = e.target.value;
              if(sortType === 'Default'){
                     setMyCraft(FilterCraft)
              }
              else if(sortType === 'Accending'){
                     const sortedCrafts = [...MyCrafts].sort((a, b) => a.Price - b.Price)
                     setMyCraft(sortedCrafts)
              }
              else if(sortType === 'Decending'){
                     const sortedCrafts = [...MyCrafts].sort((a, b) => b.Price - a.Price)
                     setMyCraft(sortedCrafts)
              }
       }

       return (
              <div>
                     <Navber></Navber>
                     <div className="flex items-center justify-between mt-10 px-5 lg:px-28">
                            <h2 className="text-3xl">My Added Craft Items</h2>
                            <div>
                                   <label className="form-control w-full max-w-xs">
                                          <select onClick={handleSort} className="select select-bordered">
                                                 <option disabled selected>Pick one</option>
                                                 <option value='Default'>Normal</option>
                                                 <option value="Accending">Low To High</option>
                                                 <option value='Decending'>High To Low</option>
                                          </select>
                                   </label>
                            </div>
                     </div>
                     <div className="flex flex-col gap-5 my-10 px-5 lg:px-28">
                            {MyCrafts.map(MyCraft => (
                                   <MyCraftItem
                                          key={MyCraft._id}
                                          MyCraft={MyCraft}
                                          MyCrafts={MyCrafts}
                                          setMyCraft={setMyCraft}
                                   />
                            ))}
                     </div>
              </div>
       );
};

export default MyArtCraft;
