import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/Layout-components/LeftNav";
import RightNav from "../components/Layout-components/RightNav";
import Navbar from "../components/Navbar";



const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto"><LatestNews></LatestNews></section>
                
            </header>

            <nav className="w-11/12 mx-auto py-2"><Navbar></Navbar></nav>
            <main className="w-11/12  mx-auto pt-5 grid md:grid-cols-12 gap-3">
            <aside className="left col-span-3">
             <LeftNav></LeftNav>

            </aside>

            <aside className="main col-span-6">
             <Outlet></Outlet>
            </aside>

            <aside className="col-span-3">
                <RightNav></RightNav>
            </aside>
                </main>
        </div>
    );
};

export default HomeLayout;