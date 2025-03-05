import { useContext } from "react";
import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";
import { AuthContext } from "../../provider/AuthProvider";

const RightBar = () => {
	const {user} = useContext(AuthContext)
	return (
		<div>
		{user && user.email ? <></>:<SocialLogin></SocialLogin>}
            <FindUs></FindUs>
		</div>
	);
};

export default RightBar;
