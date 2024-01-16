import React from "react";
import { NavLink } from "react-router-dom"

function Header() { 
    return (
    <header className="px-4 py-2 flex items-center justify-between bg-slate-200">
        <h1>hello</h1>
        <ul className="flex space-x-4">
        <NavLink to="/">home</NavLink>
        <NavLink to="/register">register</NavLink>
        <NavLink to="/login">sign in</NavLink>
        <NavLink to="/profile">profile</NavLink>  
        </ul>
      </header>
    )
}

export default Header