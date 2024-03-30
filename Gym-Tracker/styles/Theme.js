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

const Theme = ({ mode }) => {
	const { theme } = useMaterial3Theme();

	const { LightTheme, DarkTheme } = adaptNavigationTheme({
		reactNavigationLight: NavigationDefaultTheme,
		reactNavigationDark: NavigationDarkTheme,
	});

	const paperTheme =
		mode === "dark"
			? { ...MD3DarkTheme, colors: theme.dark }
			: { ...MD3LightTheme, colors: theme.light };

	const navigationTheme = mode == "dark" ? DarkTheme : LightTheme;

	return { paperTheme, navigationTheme };
};

export default Theme;
