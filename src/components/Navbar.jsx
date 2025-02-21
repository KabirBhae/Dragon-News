import { Link } from "react-router-dom";
import userImg from "../assets/user.png";
const Navbar = () => {
	return (
		<div className="flex justify-between items-center">
			<div></div>
			<div className="flex gap-1">
				<Link to="/">Home</Link>
				<Link to="/About">About</Link>
				<Link to="/Career">Career</Link>
			</div>
			<div className="flex gap-3">
				<img src={userImg} alt="" />
				<div className="btn btn-neutral w-35 rounded-none">
					<Link to="/login">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
