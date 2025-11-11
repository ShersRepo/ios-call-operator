import {ReactNode} from "react";
import {StyleSheet} from "react-native";
import {ParallaxHeaderWrapper} from "@/components/theme/parallax-header-wrapper";
import {AppText} from "@/components/theme/app-text";
import {Collapsible} from "@/components/collapsible";
import {ViewContainer} from "@/components/theme/view-container";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	innerContainer: {
		alignItems: 'flex-start',
		padding: 20,
	},
	collapsible: {
		padding: 10,
	}
});

export default function Help(): ReactNode {
	const homeHeaderImage = require(`@/assets/images/header-image.png`);

	return (
		<ParallaxHeaderWrapper>

			<ViewContainer style={styles.container}>

				<ViewContainer style={styles.innerContainer}>

					<Collapsible title="About us">

						<AppText>Description here</AppText>
					</Collapsible>

					<Collapsible title="Frequently Asked Questions">

						<AppText>Help goes here :)</AppText>
					</Collapsible>
				</ViewContainer>
			</ViewContainer>
		</ParallaxHeaderWrapper>
	)
}