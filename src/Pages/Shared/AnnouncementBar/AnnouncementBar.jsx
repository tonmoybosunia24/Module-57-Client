const AnnouncementBar = () => {
       return (
              <div className="flex justify-between lg:px-10 py-2 border-b">
                     <div className="hidden lg:block"> 
                            <p>Call Us Free 24/7 : (+91) 012-345-6789</p>
                     </div>
                     <div className="m-auto lg:m-0">
                            <ul className="flex gap-2 font-extralight">
                                   <li className=" border-r pr-2">Today's Deal</li>
                                   <li className=" border-r px-2">Contact Us</li>
                                   <li className=" border-r px-2">USD</li>
                                   <li className=" pl-2">English</li>
                            </ul>
                     </div>
              </div>
       );
};

export default AnnouncementBar;