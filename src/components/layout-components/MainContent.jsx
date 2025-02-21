import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const MainContent = () => {
	const dataFromAPI = useLoaderData();
	// console.log(data.data);
	const news = dataFromAPI.data;
	return (
		<div>
			{news.map(newsItem => (
				<NewsCard key={newsItem._id} news={newsItem}></NewsCard>
			))}
		</div>
	);
};

export default MainContent;
