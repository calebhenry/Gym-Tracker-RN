/**
 * @Author Caleb Henry
 * @Brief App bar for creating routines
 * @Notes
 */
import { Appbar } from "react-native-paper";

const CreateRoutineBar = ({ name, onCheckPress, onClosePress, editing }) => {
	return (
		<Appbar.Header elevated={true}>
			<Appbar.Action icon="close" onPress={onClosePress} />
			<Appbar.Content title={name} />
			{editing ? null : (
				<Appbar.Action icon="check" onPress={onCheckPress} />
			)}
		</Appbar.Header>
	);
};

export default CreateRoutineBar;
