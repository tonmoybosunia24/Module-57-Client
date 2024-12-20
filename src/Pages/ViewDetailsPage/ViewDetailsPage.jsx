import { useLoaderData, useParams } from "react-router";
import Navber from "../Shared/Navber/Navber";

const ViewDetailsPage = () => {

       const LoadedData = useLoaderData()
       const { name, email, Customization, StockStatus, ProcessTime, Rating, Price, ShortDescription, SubCategoryName, ItemName, photoURL } = LoadedData;
       return (
              <div>
                     <Navber></Navber>
                     <h2 className="text-3xl font-semibold text-center my-5 lg:my-10">View Details Page</h2>
                     <div className="px-5 lg:px-28 flex flex-col lg:flex-row items-center justify-center gap-5 mb-10">
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
                     </div>
              </div>
       );
};

export default ViewDetailsPage;