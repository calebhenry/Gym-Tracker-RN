/**
 * @Author Caleb Henry
 * @Brief Holds the screen for users to build a routine
 * @Notes
 */
import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { Constants, Layout } from "../styles";
import { Card, TextInput, useTheme, IconButton } from "react-native-paper";
import { useAppContext } from "../data/Context";
import CreateExercise from "../components/CreateExercise";
import Exercise from "../components/Exercise";

const RoutineCreation = ({ navigation }) => {
	const theme = useTheme();
	const { addRoutine } = useAppContext();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [exercises, setExercises] = useState([]);
	const [editing, setEditing] = useState(false);

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
					<TextInput
						label="Routine name"
						value={name}
						onChangeText={(text) => setName(text)}
						style={Constants.marginSmall}
						mode="outlined"
					/>
					<TextInput
						label="Routine description"
						value={description}
						onChangeText={(text) => setDescription(text)}
						style={Constants.marginSmall}
						mode="outlined"
					/>
				</Card.Content>
			</Card>
			{/** Holds the already made exercises */}
			<FlatList
				scrollEnabled={false}
				data={exercises}
				renderItem={renderItem}
			/>
			{/** Holds the spot where a user adds an exercise or the button to begin that process */}
			{editing ? (
				<CreateExercise
					setExercises={setExercises}
					setEditing={setEditing}
				/>
			) : (
				<IconButton
					icon="plus"
					size={22}
					mode="contained"
					iconColor={theme.colors.onPrimary}
					containerColor={theme.colors.primary}
					style={{ alignSelf: "center" }}
					onPress={() => setEditing(!editing)}
				/>
			)}
		</ScrollView>
	);
};

export default RoutineCreation;
