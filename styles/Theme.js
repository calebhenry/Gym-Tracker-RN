/**
 * @Author Caleb Henry
 * @Brief Contains the dynamic colors for the app
 * @Notes
 */
import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
	MD3DarkTheme,
	MD3LightTheme,
	adaptNavigationTheme,
} from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";

const Theme = ({ mode, dynamic }) => {
	// Fetches the system colors
	const { theme } = useMaterial3Theme();

	const { LightTheme, DarkTheme } = adaptNavigationTheme({
		reactNavigationLight: NavigationDefaultTheme,
		reactNavigationDark: NavigationDarkTheme,
	});

	let paperTheme;

	// Sets the react native paper theme to either default or the dynamic colors for dark or light theme, based on the dynamic and mode props
	if (dynamic) {
		paperTheme =
			mode === "dark"
				? { ...MD3DarkTheme, colors: theme.dark }
				: { ...MD3LightTheme, colors: theme.light };
	} else {
		paperTheme = mode === "dark" ? MD3DarkTheme : MD3LightTheme;
	}

	// Sets the navigation theme based on the mode prop
	const navigationTheme = mode == "dark" ? DarkTheme : LightTheme;

	// Returns both themes
	return { paperTheme, navigationTheme };
};

export default Theme;
