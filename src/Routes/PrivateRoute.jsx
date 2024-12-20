import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {
       const {user, loading} = useContext(AuthContext)       
       const location = useLocation()
       if(loading){
              return <span className="loading loading-spinner text-error flex items-center m-auto min-h-screen"></span>
       }
       if(user){
              return children;
       }
       return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;