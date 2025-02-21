import Header from "../../components/Header";
import LeftBar from "../../components/layout-components/LeftBar";
import MainContent from "../../components/layout-components/MainContent";
import RightBar from "../../components/layout-components/RightBar";
import Navbar from "../../components/Navbar";
import ScrollingNews from "../../components/ScrollingNews";

const Home = () => {
	return (
		<div className="mx-35 mt-12 poppins-regular text-black">
			<Header></Header>
			<ScrollingNews></ScrollingNews>
			<Navbar></Navbar>
			<main className="flex justify-between gap-5 mt-19">
				<div className="w-3/12">
					<LeftBar></LeftBar>
				</div>
				<div className="w-6/12 bg-indigo-500">
					<MainContent></MainContent>
				</div>
				<div className="w-3/12">
					<RightBar></RightBar>
				</div>
			</main>
		</div>
	);
};

export default Home;
