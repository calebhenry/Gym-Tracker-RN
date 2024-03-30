import AppStack from "./navigation/AppStack";
import { ContextProvider } from "./data/Context";

export default function App() {
	return (
		<ContextProvider>
			<AppStack />
		</ContextProvider>
	);
}
