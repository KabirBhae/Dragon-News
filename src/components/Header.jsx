import logo from "../assets/logo.png";

const Header = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<img className="w-[471]" src={logo} alt="logo" />
			<p className="mt-5 mb-3">Journalism Without Fear or Favour</p>
            <p>sunday</p>
		</div>
	);
};

export default Header;
