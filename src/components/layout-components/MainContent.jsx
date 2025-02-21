import { useLoaderData } from "react-router-dom";

const MainContent = () => {
	const dataFromAPI = useLoaderData();
	// console.log(data.data);
	const news = dataFromAPI.data;
	return <div>Length is: {news.length}</div>;
};

export default MainContent;
