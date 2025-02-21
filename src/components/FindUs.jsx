import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
	return (
		<div className="mt-8">
			<h2 className="font-semibold">Find Us On</h2>
			<div className="join join-vertical flex w-full">
				<button className="btn btn-ghost join-item justify-start mt-2"><FaFacebook></FaFacebook> Facebook</button>
				<button className="btn btn-ghost join-item justify-start mt-2"><FaTwitter></FaTwitter>Twitter</button>
				<button className="btn btn-ghost join-item justify-start mt-2"><FaInstagram></FaInstagram>Instagram</button>
			</div>
		</div>
	);
};

export default FindUs;
