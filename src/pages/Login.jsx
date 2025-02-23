import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
	const { loginUser } = useContext(AuthContext);
	const handleSubmit = e => {
		e.preventDefault();
		const form = new FormData(e.target);
		const email = form.get("email");
		const password = form.get("password");
		loginUser(email, password)
			.then(() => {
				console.log("user is logged in");
			})
			.catch(() => {alert("Credentials don't match")});
	};
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="card w-1/3 shrink-0 rounded-none p-10 bg-white">
				<h2 className="text-2xl font-semibold text-center">Login to your account</h2>
				<form onSubmit={handleSubmit} className="card-body">
					<div className="form-control">
						<label className="label mb-2">
							<span className="label-text text-base">Email address</span>
						</label>
						<input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-[#f3f3f3] p-5 mb-3" required />
					</div>
					<div className="form-control">
						<label className="label mb-2">
							<span className="label-text text-base">Password</span>
						</label>
						<input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-[#f3f3f3] p-5 mb-3" required />
						{/* <label className="label">
							<a href="#" className="label-text-alt link link-hover">
								Forgot password?
							</a>
						</label> */}
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-neutral btn-block">Login</button>
					</div>
				</form>
				<p className="text-center font-semibold">
					{`Don't Have An Account?`}{" "}
					<Link className="text-red-500" to="/auth/register">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
