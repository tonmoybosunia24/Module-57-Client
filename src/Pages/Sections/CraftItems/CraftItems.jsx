import { useLoaderData } from "react-router";
import CraftItem from "../CraftItem/CraftItem";
import { useState } from "react";
const CraftItems = () => {

       const CraftItems = useLoaderData()
       const [visibleCraft, setVisibleCraft] = useState(6)
       const handleSeeMore = () => {
              setVisibleCraft((visibleCraft) => visibleCraft + 6)
       }  

       return (
              <div>
                     <h2 className="text-center font-semibold my-10 text-3xl">CraftItems</h2>
                     <div className="grid lg:grid-cols-3 gap-8 px-5 lg:px-24 mb-10">
                            {
                                   CraftItems.slice(0, visibleCraft).map(Craft => <CraftItem key={Craft._id} Craft={Craft}></CraftItem>)
                            }
                     </div>
                     {visibleCraft < CraftItems.length && (<button onClick={handleSeeMore} className="mb-10 btn text-center block m-auto">See More</button>)}
              </div>
       );
};

export default CraftItems;