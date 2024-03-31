/**
 * @Author Caleb Henry
 * @Brief Allows a user to create an individual exercise
 * @Notes
 */
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import {
	Button,
	Card,
	IconButton,
	TextInput,
	useTheme,
	Text,
} from "react-native-paper";
import { Constants } from "../styles";
import CreateSet from "./CreateSet";

const CreateExercise = ({ setExercises, setEditing }) => {
	const [name, setName] = useState("Exercise");
	const [sets, setSets] = useState([]);
	const [visible, setVisible] = useState(false);
	const theme = useTheme();

	/**
	 * Toggles if the set modal is visible
	 */
	const showModal = () => setVisible(true);

	/**
	 * Renders a completed set as text
	 * @param {*} param0 The set to be rendered
	 * @returns The text representing the set
	 */
	const renderItem = ({ item }) => {
		return (
			<View style={Constants.marginSmall}>
				<Text variant="titleMedium">
					Set {item.id}: {item.reps} reps of {item.weight}{" "}
				</Text>
			</View>
		);
	};

	return (
		<View>
			<Card style={Constants.marginMedium}>
				<Card.Title title={name} titleVariant="titleLarge" />
				<Card.Content>
					<TextInput
						label="Name"
						value={name}
						onChangeText={(text) => setName(text)}
						style={Constants.marginSmall}
						mode="outlined"
					/>
					<FlatList
						data={sets}
						renderItem={renderItem}
						scrollEnabled={false}
						keyExtractor={(item) => item.id}
					/>
					<IconButton
						icon="plus"
						size={22}
						mode="contained"
						iconColor={theme.colors.onPrimary}
						containerColor={theme.colors.primary}
						style={{ alignSelf: "center" }}
						onPress={showModal}
					/>
				</Card.Content>
				<Card.Actions>
					<Button
						onPress={() => {
							setEditing(false);
						}}
					>
						Cancel
					</Button>
					<Button
						onPress={() => {
							setExercises((exercises) => [
								...exercises,
								{ name: name, sets: sets },
							]);
							setEditing(false);
						}}
					>
						Save
					</Button>
				</Card.Actions>
			</Card>
			<CreateSet
				visible={visible}
				setVisible={setVisible}
				sets={sets}
				setSets={setSets}
			/>
		</View>
	);
};

export default CreateExercise;
