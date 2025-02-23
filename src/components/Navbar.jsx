import { Link } from "react-router-dom";
import userImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
	const { user, logoutUser } = useContext(AuthContext);
	return (
		<div className="flex justify-end">
			<div className="w-5/12">{user && user.email}</div>
			<div className="flex justify-between items-center w-7/12">
				<div className="flex gap-4">
					<Link to="/">Home</Link>
					<Link to="/Career">Career</Link>
					<Link to="/About">About</Link>
				</div>
				<div className="flex gap-3">
					<img src={userImg} alt="" />
					{user && user.email ? (
						<button onClick={logoutUser} className="btn btn-neutral w-35 rounded-none">
							Logout
						</button>
					) : (
						<div className="btn btn-neutral w-35 rounded-none">
							<Link to="/auth/login">Login</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
