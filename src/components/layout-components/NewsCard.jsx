import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
	const { news } = props || {};
	return (
		<div className=" p-4 rounded-lg shadow-md">
			<div className="flex items-center mb-4">
				<img src={news.author.img} alt={news.author.name} className="w-10 h-10 rounded-full mr-3" />
				<div>
					<p className="font-semibold">{news.author.name}</p>
					<p className="text-sm text-gray-500">{news.author.published_date.slice(0, -3)}</p>
				</div>
				<div className="ml-auto">
					<FaShareAlt className="text-gray-600" />
				</div>
			</div>
			<div>
				<h2 className="text-xl font-semibold mb-2">{news.title}</h2>
				<img src={news.image_url} alt="News Thumbnail" className="w-full object-cover rounded-lg mb-4" />
				<p className="text-gray-700 text-sm mb-4">
					{news.details.slice(0, 150)}...{" "}
					<Link to={`/news/${news._id}`} className="text-primary">
						Read More
					</Link>
				</p>
			</div>

			{/* Ratings and Views */}
			<div className="flex items-center justify-between text-gray-600 text-sm">
				{/* Rating */}
				<div className="flex items-center">
					{/* creating a dummy array of length 5, then iterate over the indexes (not the elements) */}
					{[...Array(5)].map((_, idx) => (
						<AiFillStar key={idx} className={`text-yellow-500 ${idx < Math.round(news.rating.number) ? "" : "opacity-50"}`} />
					))}
					<span className="ml-2 font-semibold">{news.rating.number}</span>
				</div>
				<div className="flex items-center">
					<FaRegEye className="mr-1" />
					<span>{news.total_view}</span>
				</div>
			</div>
		</div>
	);
};
export default NewsCard;