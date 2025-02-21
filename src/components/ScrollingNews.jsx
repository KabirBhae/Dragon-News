import Marquee from "react-fast-marquee";

const ScrollingNews = () => {
	return (
		<div className="w-[1140] h-[80] mt-8 mb-5 p-4 flex align-center gap-5 bg-[#e7e7e7]">
			<p className="btn bg-[#D72050] w-28">Latest</p>
			<Marquee pauseOnHover={true} speed={70}>
				<p className="mr-5">I can be a React component, multiple React components, or just some text.</p>
				<p className="mr-5">This is a news about a small boy from the village of Khufra.</p>
				<p className="mr-5">Story about how an undergrad dropout became a millionnaire.</p>
				<p className="mr-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, officiis numquam. Est quis quisquam consequuntur repellat vel iure doloribus vero.ur illum magnam minus impedit cupiditate neque? </p>
				<p className="mr-5">{`Why did git change 'master' to 'main'?`} </p>
			</Marquee>
		</div>
	);
};

export default ScrollingNews;
