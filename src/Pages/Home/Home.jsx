import Slider from "../Sections/Slider/Slider";
import AnnouncementBar from "../Shared/AnnouncementBar/AnnouncementBar";
import HeaderTop from "../Shared/HeaderTop/HeaderTop";
import Navber from "../Shared/Navber/Navber";
import CraftItems from "../Sections/CraftItems/CraftItems";

const Home = () => {

       return (
              <div>
                     <HeaderTop></HeaderTop>
                     <AnnouncementBar></AnnouncementBar>
                     <Navber></Navber>
                     <Slider></Slider>
                     <CraftItems></CraftItems>
              </div>
       );
};

export default Home;