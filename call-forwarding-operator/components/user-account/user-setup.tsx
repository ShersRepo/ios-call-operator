import {ReactNode} from "react";
import {StyleSheet} from "react-native";
import {ViewContainer} from "@/components/theme/view-container";
import {AppText} from "@/components/theme/app-text";

export default function UserSetup(): ReactNode {
	const styles = StyleSheet.create({
		pageContainer: {
			gap: 40,
			alignItems: 'center',
		},
		bodyContainer: {
			gap: 8
		}
	});

	return (
		<ViewContainer style={styles.pageContainer}>

			<AppText type={"title"}>Sat Sri Akaal!</AppText>

			<ViewContainer style={styles.bodyContainer}>

				<AppText>Please sign in to get started</AppText>

				<AppText type={"link"}>Or click here to create an account</AppText>
			</ViewContainer>
		</ViewContainer>
	);
}