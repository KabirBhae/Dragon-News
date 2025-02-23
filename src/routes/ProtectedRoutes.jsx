import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const ProtectedRoutes = ({ children }) => {
	const { user, isLoading } = useContext(AuthContext);
    if(isLoading) return <Loading></Loading>
	if (user && user.email) return children;
    else return <Navigate to="/auth/login"></Navigate>
};

export default ProtectedRoutes;
