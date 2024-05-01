/**
 * @Author Caleb Henry
 * @Brief Contains the backend functions for the app
 * @Notes
 */
import React, {
	createContext,
	useEffect,
	useState,
	useContext,
	useMemo,
} from "react";
import Theme from "../styles/Theme";

const Context = createContext();

export const useAppContext = () => {
	return useContext(Context);
};

export const ContextProvider = ({ children }) => {
	const [currTheme, setCurrTheme] = useState("light");
	const [currRoutine, setCurrRoutine] = useState();
	const [dynamicColor, setDynamicColor] = useState(true);
	const [routines, setRoutines] = useState([
		{ id: 1, name: "try me", description: "okay", exercises: [] },
		{ id: 2, name: "try me again", description: "fine", exercises: [] },
	]);
	const routinesLength = routines.length;
	const { paperTheme, navigationTheme } = Theme({
		mode: currTheme,
		dynamic: dynamicColor,
	});

	const switchTheme = () => {
		if (currTheme === "light") {
			setCurrTheme("dark");
		} else {
			setCurrTheme("light");
		}
	};

	const toggleDynamicColor = () => {
		setDynamicColor(!dynamicColor);
	};

	const addRoutine = (routine) => {
		setRoutines((routines) => [...routines, routine]);
	};

	const contextValue = useMemo(
		() => ({
			currTheme,
			dynamicColor,
			paperTheme,
			navigationTheme,
			routines,
			routinesLength,
			currRoutine,
			setCurrRoutine,
			switchTheme,
			toggleDynamicColor,
			addRoutine,
		}),
		[
			currTheme,
			dynamicColor,
			paperTheme,
			navigationTheme,
			routines,
			routinesLength,
			currRoutine,
		]
	);

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
