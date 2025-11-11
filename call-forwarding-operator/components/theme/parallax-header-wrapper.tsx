import ParallaxScrollView from "@/components/theme/parallax-scroll-view";
import {Image, StyleSheet} from "react-native";
import {ReactNode} from "react";
import {Colors} from "@/constants/theme";

const styles = StyleSheet.create({
	headerImage: {
		height: '100%',
		width: '100%',
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});

const lightStyles = StyleSheet.create({
	text: {
		color: Colors.light.text
	}
});

const darkStyles = StyleSheet.create({
	text: {
		color: Colors.dark.text
	}
});

interface ParallaxWrapperProps {
	children: ReactNode;
}

export function ParallaxHeaderWrapper({children}: ParallaxWrapperProps) {
	const homeHeaderImage = require(`@/assets/images/header-image.png`);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{light: lightStyles.text.color, dark: darkStyles.text.color}}
			headerImage={<Image source={homeHeaderImage} style={styles.headerImage}/>}
		>
			{children}
		</ParallaxScrollView>
	);
}