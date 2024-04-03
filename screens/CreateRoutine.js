/**
 * @Author Caleb Henry
 * @Brief Holds the screen for users to build a routine
 * @Notes
 */
import React, { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Constants, Layout } from "../styles";
import { Card, TextInput, useTheme, IconButton } from "react-native-paper";
import { useAppContext } from "../data/Context";
import CreateExercise from "../components/CreateExercise";
import Exercise from "../components/Exercise";
import CreateRoutineBar from "../components/CreateRoutineBar";

const CreateRoutine = ({ navigation }) => {
	const theme = useTheme();
	const { addRoutine, routinesLength } = useAppContext();
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
		<View
			style={[
				Layout.screen,
				{ backgroundColor: theme.colors.background },
			]}
		>
			<CreateRoutineBar
				name={"Create Your Routine"}
				onClosePress={() => {
					navigation.navigate("Home");
				}}
				onCheckPress={() => {
					addRoutine({
						id: routinesLength + 1,
						name: name,
						description: description,
						exercises: exercises,
					});
					navigation.navigate("Home");
				}}
				editing={editing}
			/>
			<ScrollView style={{ flex: 1 }}>
				<Card style={Constants.marginMedium}>
					<Card.Title
						title="Routine Base"
						titleVariant="titleLarge"
					/>
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
		</View>
	);
};

export default CreateRoutine;
