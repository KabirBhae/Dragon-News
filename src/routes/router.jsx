import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainContent from "../components/layout-components/MainContent";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout></HomeLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "",
				element: <Navigate to={"/category/01"}></Navigate>,
			},
			{
				path: "/category/:category_id",
				loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`),
				element: <MainContent></MainContent>,
			},
		],
	},
]);

export default router;
