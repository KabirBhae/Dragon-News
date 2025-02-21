import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
	return (
		<div>
			<h2 className="font-semibold">Login with </h2>
			<button className="btn btn-ghost w-full mt-2">
				<FaGoogle></FaGoogle> Login with Google
			</button>
			<button className="btn btn-ghost w-full mt-2">
				<FaGithub></FaGithub> Login with Github
			</button>
		</div>
	);
};

export default SocialLogin;
