import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { useAppContext } from "../data/Context";
import { View } from "react-native";
import HomeNavigationBar from "../components/HomeNavigationBar";

const Stack = createNativeStackNavigator();

const AppStack = () => {
	const { paperTheme, navigationTheme } = useAppContext();

	return (
		<View
			style={{ flex: 1, backgroundColor: paperTheme.colors.background }}
		>
			<PaperProvider theme={paperTheme}>
				<NavigationContainer theme={navigationTheme}>
					<Stack.Navigator
						initialRouteName="Home"
						screenOptions={{ header: false }}
					>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{
								header: (props) => (
									<HomeNavigationBar {...props} />
								),
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</View>
	);
};

export default AppStack;
