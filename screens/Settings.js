/**
 * @Author Caleb Henry
 * @Brief Contains the settings a user can edit
 * @Notes
 */
import React, { useState } from "react";
import { View } from "react-native";
import { Switch, Text, useTheme } from "react-native-paper";
import { useAppContext } from "../data/Context";
import { Constants, Layout } from "../styles";

const Settings = ({ navigation }) => {
	const theme = useTheme();
	const { currTheme, dynamicColor, switchTheme, toggleDynamicColor } =
		useAppContext();

	return (
		<View
			style={[
				Layout.screen,
				{ backgroundColor: theme.colors.background },
			]}
		>
			<View style={Constants.paddingMedium}>
				{/** Holds the dark theme toggle */}
				<View
					style={[
						Layout.rowContainer,
						{
							justifyContent: "space-between",
							alignItems: "center",
						},
					]}
				>
					<Text variant="bodyLarge">Dark theme</Text>
					<Switch
						value={currTheme != "light"}
						onValueChange={switchTheme}
					/>
				</View>
				{/** Holds the dynamic color toggle */}
				<View
					style={[
						Layout.rowContainer,
						{
							justifyContent: "space-between",
							alignItems: "center",
						},
					]}
				>
					<Text variant="bodyLarge">Dynamic color</Text>
					<Switch
						value={dynamicColor}
						onValueChange={toggleDynamicColor}
					/>
				</View>
			</View>
		</View>
	);
};

export default Settings;
