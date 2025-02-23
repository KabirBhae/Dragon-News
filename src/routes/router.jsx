import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import MainContent from "../components/layout-components/MainContent";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";

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
	{
		path: "/auth",
		element: <AuthLayout></AuthLayout>,
		children: [
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "/news/:news_id",
		loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.news_id}`),
		element: <NewsDetails></NewsDetails>
	},
]);

export default router;
