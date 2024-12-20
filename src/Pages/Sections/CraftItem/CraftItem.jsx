import { Link } from "react-router";

const CraftItem = ({Craft}) => {

       const {_id, name, email, Customization, SubCategoryName, ItemName, photoURL} = Craft;  

       return (
              <div>
                     <div className="border-2  h-full  px-6 py-7 space-y-2">
                            <img className="w-72 h-48" src={photoURL} alt="" />
                            <p>Name:{name}</p>
                            <p>Email:{email}</p>
                            <p>ItmeName:{ItemName}</p>
                            <p>SubCategory:{SubCategoryName}</p>
                            {Customization ? <p>Customization: Yes</p> : <p>Customization: No</p>}
                            <Link to={`/viewdetails/${_id}`}><button className="btn block m-auto rounded-none mt-3">View Details Page</button></Link>
                     </div>
              </div>
       );
};

export default CraftItem;