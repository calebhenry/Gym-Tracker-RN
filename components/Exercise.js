/**
 * @Author Caleb Henry
 * @Brief A card representation of an exercise
 * @Notes
 */
import React from "react";
import { Card, IconButton, Text } from "react-native-paper";
import { Constants } from "../styles";
import { FlatList, View } from "react-native";

const Exercise = ({ exercise }) => {
	/**
	 * Renders the text for each set
	 * @param {*} param0 The set that is being rendered
	 * @returns The text representing that set
	 */
	const renderItem = ({ item }) => {
		return (
			<Text variant="titleMedium" style={{ marginBottom: "2%" }}>
				Set {item.id}: {item.reps} reps of {item.weight}
			</Text>
		);
	};

	return (
		<Card style={Constants.marginMedium}>
			<Card.Title
				title={exercise.name}
				titleVariant="titleLarge"
				right={(props) => (
					<IconButton {...props} icon="pencil" onPress={() => {}} />
				)}
			/>

			<Card.Content>
				<FlatList
					data={exercise.sets}
					renderItem={renderItem}
					scrollEnabled={false}
					keyExtractor={(item) => item.id}
				/>
			</Card.Content>
		</Card>
	);
};

export default Exercise;
