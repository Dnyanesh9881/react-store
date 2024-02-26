import React from "react";
import { NavLink } from "react-router-dom";

const leftRoutes=[
  {
    path:"/",
    name:"Home"
  },
  {
    path:"/about",
    name:"About"
  },
  {
    path:"/cart",
    name:"Cart"
  },
  {
    path:"/wishlist",
    name:"WishList"
  },
 
]
const rightRoutes=[
  {
    path:"/login",
    name:"Login"
  },
  {
    path:"/signup",
    name:"Signup"
  }
]

function Navbar() {
  return (
    <nav className=" text-lg font-semibold  flex p-4 justify-between gap-4 text-center">
      <div>
        {
          leftRoutes.map((route, i)=>(
            <NavLink key={i} className="mx-3" to={route.path}>{route.name}</NavLink>
          ))
        }
      </div>
      <div>
      {
          rightRoutes.map((route, i)=>(
            <NavLink  key={i} className="mx-3" to={route.path}>{route.name}</NavLink>
          ))
        }
      </div>
    </nav>
  );
}

export default Navbar;
