import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


const Find = () => {
    return (
        <div>
             <h2 className="font-semibold mb-3"> Find Us On</h2>
             <div className="join flex join-vertical *:bg-base-100">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn join-item justify-start"> <FaInstagram></FaInstagram>Instagram</button>
  <button className="btn join-item justify-start"><FaSquareTwitter></FaSquareTwitter> Twitter</button>
</div>
        </div>
    );
};

export default Find;