import { Link } from "react-router-dom";
import userIcon from "../assets/demo-user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between
        items-center">
            <div className=""></div>
            <div className="nav space-x-5">
            <Link to="/">Home</Link>
            <Link to="/career">Career</Link>
            <Link to="/about">About</Link>
            </div>
            <div className="login flex items-center ">
                <div className="flex space-x-4 items-center">
                    <img src={userIcon} alt="" />
                    <button className="btn btn-neutral rounded-none">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;