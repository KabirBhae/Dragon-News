import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
	const auth = getAuth(app);
	const [user, setUser] = useState(null);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
	const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
	const logoutUser = () => signOut(auth);
	const authInfo = { user, setUser, registerUser, loginUser, logoutUser };
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
