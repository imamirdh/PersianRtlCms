import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Users from "./Pages/Users";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Comments from "./Pages/Comments";
import Articles from "./Pages/Articles";
import Message from "./Pages/Message";
import Menus from "./Pages/Menus";
let routes=[
    {path:"/",element:<Home/>},
    {path:"/Products",element:<Products/>},
    {path:"/Comments",element:<Comments/>},
    {path:"/Users",element:<Users/>},
    {path:"/Orders",element:<Orders/>},
    {path:"/Articles",element:<Articles/>},
    {path:"/Category",element:<Category/>},
    {path:"/Message",element:<Message/>},
    {path:"/Menus",element:<Menus/>},
]

export default routes;
