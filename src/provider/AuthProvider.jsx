import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const loginUser = (email, password) => {
		setIsLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const updateUserInfo = (name,photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		})
	}
	const logoutUser = () => {
		setIsLoading(true);
		return signOut(auth);
	};
	//for context API
	const authInfo = {
		user,
		registerUser,
		loginUser,
		updateUserInfo,
		logoutUser,
		isLoading,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
