import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Root() {
    return (
        <>
            <Header/>
            <main className="flex-1 flex-row justify-start bg-slate-400 ">
                <Menu />
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}