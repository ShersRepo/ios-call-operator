import { Text, View } from 'react-native';
import { ReactElement } from 'react';

export default function Index(): ReactElement {

	return (
		<View
			style={ {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center'
			} }>
			<Text>Sat Sri Akaal!</Text>
		</View>
	);
}
