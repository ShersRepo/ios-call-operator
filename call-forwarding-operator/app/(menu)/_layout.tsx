import {useColorScheme} from "@/hooks/use-color-scheme";
import {Tabs} from "expo-router";
import {Colors} from "@/app-example/constants/theme";
import {HapticTab} from "@/app-example/components/haptic-tab";
import {IconSymbol} from "@/components/icon-symbol";

type TabBarIconProps = { color: string }

const HomeButton = (props: Readonly<TabBarIconProps>) => (
	<IconSymbol size={28} name="house.fill" color={props.color}/>
);

export default function HomeScreen() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarButton: HapticTab,
			}}>

			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: HomeButton,
				}}
			/>

			<Tabs.Screen
				name="help"
				options={{
					title: 'Help',
					tabBarIcon: HomeButton,
				}}
			/>
		</Tabs>
	);
}