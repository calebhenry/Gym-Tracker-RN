/**
 * @Author Caleb Henry
 * @Brief Basic center aligned header with account and settings button
 * @Notes
 */
import { Appbar, useTheme } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

const HomeNavigationBar = ({ navigation, route, options, back }) => {
	const title = getHeaderTitle(options, route.name);

	return (
		<Appbar.Header elevated={true} mode="center-aligned">
			<Appbar.Action icon="account-circle" onPress={() => {}} />
			<Appbar.Content title={title} />
			<Appbar.Action
				icon="cog"
				onPress={() => {
					navigation.navigate("Settings");
				}}
			/>
		</Appbar.Header>
	);
};

export default HomeNavigationBar;
