/**
 * @Author Caleb Henry
 * @Brief Contains the backend functions for the app
 * @Notes
 */
import { createContext, useEffect, useState, useContext } from "react";
import Theme from "../styles/Theme";

const Context = createContext();

/**
 * Exports the app context as a function
 * @returns The app context
 */
export const useAppContext = () => {
	return useContext(Context);
};

export const ContextProvider = ({ children }) => {
	const [currTheme, setCurrTheme] = useState("light");
	const [dynamicColor, setDynamicColor] = useState(true);
	const [routines, setRoutines] = useState([
		{ name: "try me", description: "okay" },
		{ name: "try me again", description: "fine" },
	]);
	const { paperTheme, navigationTheme } = Theme({
		mode: currTheme,
		dynamic: dynamicColor,
	});

	/**
	 * Toggles between light and dark theme
	 */
	const switchTheme = () => {
		if (currTheme == "light") {
			setCurrTheme("dark");
		} else {
			setCurrTheme("light");
		}
	};

	/**
	 * Toggles dynamic color
	 */
	const toggleDynamicColor = () => {
		setDynamicColor(!dynamicColor);
	};

	/**
	 * Adds a new routine to the list
	 * @param {*} routine The routine to be added
	 */
	const addRoutine = (routine) => {
		setRoutines((routines) => [...routines, routine]);
	};

	return (
		<Context.Provider
			value={{
				currTheme,
				dynamicColor,
				paperTheme,
				navigationTheme,
				routines,
				switchTheme,
				toggleDynamicColor,
				addRoutine,
			}}
		>
			{children}
		</Context.Provider>
	);
};
