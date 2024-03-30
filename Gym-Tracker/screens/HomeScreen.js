import React from "react";
import { FlatList, View, useColorScheme } from "react-native";
import { Card, Text, useTheme, Switch, Button } from "react-native-paper";
import { useAppContext } from "../data/Context";

const HomeScreen = ({ navigation }) => {
	const theme = useTheme();
	const [isSwitchOn, setIsSwitchOn] = React.useState(false);
	const { switchTheme } = useAppContext();

	const data = [
		{ name: "try me", description: "okay" },
		{ name: "try me again", description: "fine" },
	];

	const onToggleSwitch = () => {
		switchTheme();
		setIsSwitchOn(!isSwitchOn);
	};

	const renderItem = ({ item }) => {
		return (
			<Card style={{ margin: 5 }}>
				<Card.Title title={item.name} titleVariant="titleLarge" />
				<Card.Content>
					<Text variant="bodyMedium">{item.description}</Text>
				</Card.Content>
			</Card>
		);
	};

	return (
		<View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
			<FlatList data={data} renderItem={renderItem} />
			<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
		</View>
	);
};

export default HomeScreen;
