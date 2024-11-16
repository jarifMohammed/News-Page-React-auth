import Find from "../Find";
import SocialLogin from "../SocialLogin";


const RightNav = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <Find></Find>
        </div>
    );
};

export default RightNav;