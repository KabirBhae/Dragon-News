import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import MainContent from "./components/layout-components/MainContent.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "",
				element: <Navigate to={"/category/01"}></Navigate>
			},
			{
				path: "/category/:category_id",
				loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`),
				element: <MainContent></MainContent>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
