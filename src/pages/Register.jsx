import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
	const { registerUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const [customError, setCustormError] = useState({})

	const handleRegister = e => {
		e.preventDefault();
		const form = new FormData(e.target);
		// const name = form.get("name");
		const email = form.get("email");
		// const photoURL = form.get("photo");
		const password = form.get("password");


		registerUser(email, password)
			.then(() => {
				navigate("/");
			})
			.catch(err =>{
				setCustormError({...err, registerError: err.code});
			});
	};
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="card w-1/3 shrink-0 rounded-none p-10 bg-white">
				<h2 className="text-2xl font-semibold text-center">Register your account</h2>
				<form onSubmit={handleRegister} className="card-body">
					<div className="form-control">
						<label className="label mb-2">
							<span className="label-text text-base">Your name</span>
						</label>
						<input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#f3f3f3] p-5 mb-3" required />
					</div>
					<div className="form-control">
						<label className="label mb-2">
							<span className="label-text text-base">Photo URL</span>
						</label>
						<input type="text" name="photo" placeholder="Enter the link to your photo" className="input input-bordered bg-[#f3f3f3] p-5 mb-3" required />
					</div>
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
						{customError && (
							<label className="label mb-2">
								<span className="label-text text-xs text-red-500">{customError.registerError}</span>
							</label>
						)}

						{/* <label className="label">
							<a href="#" className="label-text-alt link link-hover">
								Forgot password?
							</a>
						</label> */}
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-neutral btn-block">Register</button>
					</div>
				</form>
				<p className="text-center font-semibold">
					Already Have An Account?
					<Link className="text-red-500 ml-2" to="/auth/login">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
