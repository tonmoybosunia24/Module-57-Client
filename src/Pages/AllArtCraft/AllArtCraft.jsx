import { useLoaderData } from "react-router";
import Navber from "../Shared/Navber/Navber";
import { useState } from "react";

const AllArtCraft = () => {

       const loadedCrafts = useLoaderData()
       const [AllCrafts, setAllCrafts] = useState(loadedCrafts)
       const [notFound, setNotFound] = useState(false)

       const handleSearch = e => {
              const search = e.target.value.trim();
              if (search === '') {
                     setAllCrafts(loadedCrafts);
                     setNotFound(false)
                     return;
              }
              const searchFilter = loadedCrafts.filter((loadedCraft) => loadedCraft.email.toLowerCase().includes(search.toLowerCase()) || String(loadedCraft.Rating).includes(search) || loadedCraft.SubCategoryName.toLowerCase().includes(search.toLowerCase()) || loadedCraft.ItemName.toLowerCase().includes(search.toLowerCase()));
              setAllCrafts(searchFilter)
              setNotFound(searchFilter.length === 0)
              
       }

       return (
              <div>
                     <Navber></Navber>
                     <div className="my-10 w-96 m-auto">
                            <label className="input input-bordered flex items-center gap-2">
                                   <input onChange={handleSearch} type="text" className="grow" placeholder="Search" />
                                   <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          fill="currentColor"
                                          className="h-4 w-4 opacity-70">
                                          <path
                                                 fillRule="evenodd"
                                                 d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                 clipRule="evenodd" />
                                   </svg>
                            </label>
                     </div>
                     <div>
                            <div className="overflow-x-auto">
                                   {
                                          notFound ? <p className="text-xl text-center">No Data Found</p> : 
                                          <table className="table table-xs">
                                          <thead>
                                                 <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>SubCategoryName</th>
                                                        <th>ItemName</th>
                                                        <th>Rating</th>
                                                        <th>Price</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 {
                                                        AllCrafts.map((AllCraft, index) => (
                                                               <tr key={AllCraft._id}>
                                                                      <th>{index + 1}</th>
                                                                      <td>{AllCraft.name}</td>
                                                                      <td>{AllCraft.email}</td>
                                                                      <td>{AllCraft.SubCategoryName}</td>
                                                                      <td>{AllCraft.ItemName}</td>
                                                                      <td>{AllCraft.Rating}</td>
                                                                      <td>{AllCraft.Price}</td>
                                                               </tr>
                                                        ))
                                                 }
                                          </tbody>
                                   </table>
                                   }
                            </div>
                     </div>
              </div>
       );
};

export default AllArtCraft;