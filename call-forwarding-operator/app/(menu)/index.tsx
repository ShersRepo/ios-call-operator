import {ReactElement} from 'react';
import {Image} from "expo-image";
import ParallaxScrollView from "@/components/theme/parallax-scroll-view";
import {StyleSheet} from "react-native";
import UserSetup from "@/components/user-account/user-setup";

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	headerImage: {
		height: '100%',
		width: '100%',
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});


export default function Index(): ReactElement {
	const homeHeaderImage = require(`@/assets/images/header-image.png`);
	const userIsSignedIn = false;

	return (
		<ParallaxScrollView
			headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
			headerImage={<Image source={homeHeaderImage} style={styles.headerImage}/>}
		>

			{userIsSignedIn &&
                <div>Sat Sri Akaal!</div>
			}
			{
				!userIsSignedIn &&
                <UserSetup/>
			}
		</ParallaxScrollView>
	);

}
