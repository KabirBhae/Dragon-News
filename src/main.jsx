import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		errorElement: <ErrorPage></ErrorPage>,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
