import logo from "../assets/logo.png";
import moment from "moment";
const Header = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<img className="w-[471]" src={logo} alt="logo" />
			<p className="mt-5 mb-3 text-gray-500">Journalism Without Fear or Favour</p>
			<p>{moment().format('dddd, MMMM D, YYYY')}</p>
		</div>
	);
};

export default Header;
