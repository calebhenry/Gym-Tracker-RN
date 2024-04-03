/**
 * @Author Caleb Henry
 * @Brief Allows a user to create a set
 * @Notes Appears as a component, but will render as a modal
 */
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
	Button,
	TextInput,
	useTheme,
	Portal,
	Modal,
	Text,
	SegmentedButtons,
} from "react-native-paper";
import { Constants, Layout } from "../styles";

const CreateSet = ({ visible, setVisible, sets, setSets }) => {
	const [weight, setWeight] = useState("");
	const [type, setType] = useState("regular");
	const [numReps, setNumReps] = useState("");
	const theme = useTheme();
	const validWeight = weight != "" && weight.indexOf(",") == -1;
	const validNumReps =
		numReps != "" &&
		numReps.indexOf(".") == -1 &&
		numReps.indexOf(",") == -1;
	const validInput = validWeight && validNumReps;

	// Resets the values when hidden
	useEffect(() => {
		if (!visible) {
			setWeight("");
			setType("");
			setNumReps("");
		}
	}, [visible]);

	/**
	 * Hides the modal
	 */
	const hideModal = () => setVisible(false);

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
					keyboardType="number-pad"
					label="Weight"
					value={weight}
					onChangeText={(text) => setWeight(text)}
					style={Constants.marginSmall}
					mode="outlined"
				/>
				<TextInput
					keyboardType="number-pad"
					label="Number of Reps"
					value={numReps.toString()}
					onChangeText={(text) => setNumReps(text)}
					style={Constants.marginSmall}
					mode="outlined"
				/>
				{visible ? (
					<Button
						mode="elevated"
						disabled={!validInput}
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
						style={[
							{
								width: "50%",
								alignSelf: "center",
							},
							Constants.marginSmall,
						]}
					>
						Save
					</Button>
				) : null}
			</Modal>
		</Portal>
	);
};

export default CreateSet;
