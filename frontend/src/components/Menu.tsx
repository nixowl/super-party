import { NavLink } from "react-router-dom"
import React from "react"

function Menu() {
    return (
        <nav className="px-4 py-2 flex flex-col flex-1 max-w-[20%] items-center justify-around bg-slate-300 space-y-4">
            <h1>sidebar</h1>
            <ul className="flex flex-col space-y-4">
            <NavLink to="/">home</NavLink>
            <NavLink to="/register">register</NavLink>
            <NavLink to="/login">sign in</NavLink>
            <NavLink to="/profile">profile</NavLink>
            </ul>
        </nav>
    )
}

export default Menu