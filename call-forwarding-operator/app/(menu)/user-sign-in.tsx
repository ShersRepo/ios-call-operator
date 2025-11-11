import {ViewContainer} from "@/components/theme/view-container";
import {AppText} from "@/components/theme/app-text";
import {Link} from "expo-router";
import {StyleSheet} from "react-native";
import {ParallaxHeaderWrapper} from "@/components/theme/parallax-header-wrapper";

export default function UserSignIn() {
	return (
		<ParallaxHeaderWrapper>

			<ViewContainer style={styles.container}>

				<AppText type="title">Time to sign in :)</AppText>

				<Link href="/help" dismissTo style={styles.link}>
					<AppText type="link">Sign in form goes here</AppText>
				</Link>
			</ViewContainer>
		</ParallaxHeaderWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});