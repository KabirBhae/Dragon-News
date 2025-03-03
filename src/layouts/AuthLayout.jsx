import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<div className="text-black poppins-regular bg-[#f3f3f3]">
			<header className="py-3 w-11/12 mx-auto">
				<Navbar></Navbar>
			</header>
			<Outlet></Outlet>
		</div>
	);
};

export default AuthLayout;