import { createContext, useEffect, useState, useContext } from "react";
import Theme from "../styles/Theme";

const Context = createContext();

export const useAppContext = () => {
	return useContext(Context);
};

export const ContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const { paperTheme, navigationTheme } = Theme({ mode: theme });

	const switchTheme = () => {
		if (theme == "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	return (
		<Context.Provider
			value={{ theme, paperTheme, navigationTheme, switchTheme }}
		>
			{children}
		</Context.Provider>
	);
};
