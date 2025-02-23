import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const auth = getAuth(app);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setIsLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const registerUser = (email, password) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password);
	};
	const loginUser = (email, password) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password);
	};
	const logoutUser = () => {
		setIsLoading(true);
		signOut(auth);
	};
	//for context API
	const authInfo = {
		user,
		registerUser,
		loginUser,
		logoutUser,
		isLoading,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
