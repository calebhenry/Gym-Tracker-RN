/**
 * @Author Caleb Henry
 * @Brief Basic app bar with back button
 * @Notes
 */
import { Appbar, useTheme } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

const BackNavigationBar = ({ navigation, route, options, back }) => {
	const title = getHeaderTitle(options, route.name);

	return (
		<Appbar.Header elevated={true}>
			{back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
			<Appbar.Content title={title} />
		</Appbar.Header>
	);
};

export default BackNavigationBar;
