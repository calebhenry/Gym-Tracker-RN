/**
 * @Author Caleb Henry
 * @Brief Contains a list of all routines, as well as settings and profile
 * @Notes
 */
import React from "react";
import { FlatList, View } from "react-native";
import { Card, Text, useTheme, FAB } from "react-native-paper";
import { Constants, Layout } from "../styles";
import { useAppContext } from "../data/Context";

const HomeScreen = ({ navigation }) => {
	const theme = useTheme();
	const { routines } = useAppContext();

	/**
	 * Renders each routine as a card
	 * @param {*} param0 The routine that is being rendered
	 * @returns The card
	 */
	const renderItem = ({ item }) => {
		return (
			<Card style={Constants.marginSmall}>
				<Card.Title title={item.name} titleVariant="titleLarge" />
				<Card.Content>
					<Text variant="bodyMedium">{item.description}</Text>
				</Card.Content>
			</Card>
		);
	};

	return (
		<View
			style={[
				Layout.screen,
				{
					backgroundColor: theme.colors.background,
				},
			]}
		>
			<FlatList
				data={routines}
				renderItem={renderItem}
				contentContainerStyle={Constants.paddingSmall}
			/>
			{/** Lets the user create a routine */}
			<FAB
				icon="plus"
				style={{
					position: "absolute",
					margin: 30,
					right: 0,
					bottom: 0,
				}}
				onPress={() => navigation.navigate("Create")}
			/>
		</View>
	);
};

export default HomeScreen;
