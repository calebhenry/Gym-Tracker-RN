/**
 * @Author Caleb Henry
 * @Brief Holds the screen for users to build a routine
 * @Notes
 */
import React, { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Constants, Layout } from "../styles";
import {
	Card,
	TextInput,
	useTheme,
	IconButton,
	Button,
	Text,
} from "react-native-paper";
import { useAppContext } from "../data/Context";
import CreateExercise from "../components/CreateExercise";
import Exercise from "../components/Exercise";

const Routine = ({ navigation }) => {
	const theme = useTheme();
	const { currRoutine } = useAppContext();

	/**
	 * Renders the exercise as a card
	 * @param {*} param0 The exercise to be rendered
	 * @returns The card
	 */
	const renderItem = ({ item }) => {
		return <Exercise exercise={item} />;
	};

	return (
		<ScrollView
			style={[
				Layout.screen,
				{ backgroundColor: theme.colors.background },
			]}
		>
			<Card style={Constants.marginMedium}>
				<Card.Title title="Routine Base" titleVariant="titleLarge" />
				<Card.Content>
					<Text>Name: {currRoutine.name}</Text>
					<Text>Desciption: {currRoutine.description}</Text>
				</Card.Content>
			</Card>
			{/** Holds the already made exercises */}
			<FlatList
				scrollEnabled={false}
				data={currRoutine.exercises}
				renderItem={renderItem}
			/>
		</ScrollView>
	);
};

export default Routine;
