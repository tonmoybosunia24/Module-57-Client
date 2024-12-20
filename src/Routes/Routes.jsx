import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllArtCraft from "../Pages/AllArtCraft/AllArtCraft";
import MyArtCraft from "../Pages/MyArtCraft/MyArtCraft";
import PrivateRoute from "./PrivateRoute";
import AddCraftItems from "../Pages/AddCraftItems/AddCraftItems";
import ViewDetailsPage from "../Pages/ViewDetailsPage/ViewDetailsPage";
import UpdateCraft from "../Pages/UpdateCraft/UpdateCraft";

const Routes = createBrowserRouter([
       {
              path: '/',
              element: <Root></Root>,
              errorElement: <ErrorPage></ErrorPage>,
              children: [
                     {
                            path: '/',
                            element: <Home></Home>,
                            loader: () => fetch('http://localhost:5000/craftitem')
                     },
                     {
                            path: '/allartcraft',
                            element: <AllArtCraft></AllArtCraft>,
                            loader: () => fetch('http://localhost:5000/craftitem')
                     },
                     {
                            path: '/viewdetails/:id',
                            element: <ViewDetailsPage></ViewDetailsPage>,
                            loader: ({params}) => fetch(`http://localhost:5000/craftitem/${params.id}`)
                     },
                     {
                            path: '/updatecraft/:id',
                            element: <UpdateCraft></UpdateCraft>,
                            loader: ({params}) => fetch(`http://localhost:5000/craftitem/${params.id}`)
                     },
                     {
                            path: '/addcraft',
                            element: <PrivateRoute>
                                          <AddCraftItems></AddCraftItems>
                                     </PrivateRoute>
                     },
                     {
                            path: '/myartcraft',
                            element: <PrivateRoute>
                                          <MyArtCraft></MyArtCraft>
                                     </PrivateRoute>,
                            loader: () => fetch('http://localhost:5000/craftitem')
                     },
                     {
                            path: '/login',
                            element: <Login></Login>
                     },
                     {
                            path: '/register',
                            element: <Register></Register>
                     }
              ]
       }
])

export default Routes;