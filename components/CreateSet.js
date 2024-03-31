/**
 * @Author Caleb Henry
 * @Brief Allows a user to create a set
 * @Notes Appears as a component, but will render as a modal
 */
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
	Button,
	Card,
	IconButton,
	TextInput,
	useTheme,
	Portal,
	Modal,
	Text,
} from "react-native-paper";
import { Constants, Layout } from "../styles";

const CreateSet = ({ visible, setVisible, sets, setSets }) => {
	const [weight, setWeight] = useState("");
	const [type, setType] = useState("regular");
	const [numReps, setNumReps] = useState("");
	const theme = useTheme();

	/**
	 * Hides the modal
	 */
	const hideModal = () => setVisible(false);

	// Resets the values when hidden
	useEffect(() => {
		if (!visible) {
			setWeight("");
			setType("");
			setNumReps("");
		}
	}, [visible]);

	return (
		<Portal>
			<Modal
				visible={visible}
				onDismiss={hideModal}
				contentContainerStyle={[
					{
						width: "80%",
						height: "500",
						backgroundColor: theme.colors.background,
						borderRadius: 12,
						alignSelf: "center",
					},
					Constants.paddingMedium,
				]}
			>
				<TextInput
					label="Weight"
					value={weight}
					onChangeText={(text) => setWeight(text)}
					style={Constants.marginSmall}
					mode="outlined"
				/>
				<TextInput
					label="Number of Reps"
					value={numReps.toString()}
					onChangeText={(text) => setNumReps(text)}
					style={Constants.marginSmall}
					mode="outlined"
				/>
				{visible ? (
					<Button
						mode="elevated"
						style={[
							{ width: "50%", alignSelf: "center" },
							Constants.marginSmall,
						]}
					>
						<Text
							variant="bodyMedium"
							onPress={() => {
								setSets((sets) => [
									...sets,
									{
										id: sets.length + 1,
										weight: weight,
										type: type,
										reps: numReps,
									},
								]);
								setVisible(false);
							}}
						>
							Save
						</Text>
					</Button>
				) : null}
			</Modal>
		</Portal>
	);
};

export default CreateSet;
