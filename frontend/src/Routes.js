import Home from "./Pages/Home";
// import Discount from "./Pages/Discounts";
import Users from "./Pages/Users";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Comments from "./Pages/Comments";
import Articles from "./Pages/Articles";
let routes=[
    {path:"/",element:<Home/>},
    {path:"/Products",element:<Products/>},
    {path:"/Comments",element:<Comments/>},
    {path:"/Users",element:<Users/>},
    {path:"/Orders",element:<Orders/>},
    {path:"/Articles",element:<Articles/>},
    // {path:"/Discount",element:<Discount/>},
]

export default routes;
