import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightBar from "../components/layout-components/RightBar";
import { IoArrowBackSharp } from "react-icons/io5";

const NewsDetails = () => {
	const data = useLoaderData();
	const news = data.data[0];
	return (
		<div className="mx-35 mt-12 poppins-regular text-black">
			<Header></Header>
			<main className="flex justify-between gap-5 mt-11">
				<section className="w-9/12">
					<h2 className="font-semibold mb-3">Dragon News</h2>
					<div className="card bg-gray-100">
						<figure className="px-10 pt-10">
							<img src={news?.image_url} alt="Shoes" className="rounded-xl" />
						</figure>
						<div className="card-body ">
							<h2 className="card-title">{news?.title}</h2>
							<p>{news?.details}</p>
							<div className="card-actions mt-2">
								<Link to={`/category/${news?.category_id}`} className="btn btn-neutral">
									<IoArrowBackSharp />
									Back to Categorical News
								</Link>
							</div>
						</div>
					</div>
				</section>
				<aside className="w-1/3">
					<RightBar></RightBar>
				</aside>
			</main>
		</div>
	);
};

export default NewsDetails;
