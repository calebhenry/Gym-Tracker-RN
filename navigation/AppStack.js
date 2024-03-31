/**
 * @Author Caleb Henry
 * @Brief Contains the screens for the app
 * @Notes
 */
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { useAppContext } from "../data/Context";
import { View } from "react-native";
import HomeNavigationBar from "../components/HomeNavigationBar";
import BackNavigationBar from "../components/BackNavigationBar";
import Settings from "../screens/Settings";
import { StatusBar } from "expo-status-bar";
import RoutineCreation from "../screens/RoutineCreation";

const Stack = createNativeStackNavigator();

const AppStack = () => {
	const { paperTheme, navigationTheme, currTheme } = useAppContext();

	return (
		<View
			style={{ flex: 1, backgroundColor: paperTheme.colors.background }}
		>
			<PaperProvider theme={paperTheme}>
				<NavigationContainer theme={navigationTheme}>
					{/** Fixes status bar color */}
					{currTheme == "light" ? (
						<StatusBar style="dark" translucent />
					) : (
						<StatusBar style="light" translucent />
					)}
					<Stack.Navigator
						initialRouteName="Home"
						screenOptions={{
							header: (props) => <BackNavigationBar {...props} />,
						}}
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
						<Stack.Screen name="Settings" component={Settings} />
						<Stack.Screen
							name="Create"
							component={RoutineCreation}
							options={{
								animation: "slide_from_bottom",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</View>
	);
};

export default AppStack;
