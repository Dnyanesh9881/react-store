import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/wishlist"}>WishList</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/signup"}>Signup</NavLink>

    </nav>
  )
}

export default Navbar

