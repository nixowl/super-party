import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <Header/>
            <main className="flex-1 flex items-center justify-center bg-red-500">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}