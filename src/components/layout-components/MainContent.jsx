import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const MainContent = () => {
	const dataFromAPI = useLoaderData();
	// console.log(data.data);
	const news = dataFromAPI.data;
	return (
		<div>
			{news.length?  news.map(newsItem => (
				<NewsCard key={newsItem._id} news={newsItem}></NewsCard>
			)) : <h2 className="text-2xl text-center">No news in this category!</h2>}
		</div>
	);
};

export default MainContent;
