import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Root() {
    return (
        <>
            <Header/>
            <main className="flex-1 flex items-center justify-center bg-slate-400 ">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}