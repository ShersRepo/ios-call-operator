import {View, ViewProps} from 'react-native';
import {useThemeColor} from '@/app-example/hooks/use-theme-color';
import {ReactElement} from 'react';

export type ContainerViewProps = ViewProps & {
	lightColor?: string;
	darkColor?: string;
};

export function ViewContainer({
								  style,
								  lightColor,
								  darkColor,
								  ...otherProps
							  }: ContainerViewProps): ReactElement {
	const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');

	return <View style={[{backgroundColor}, style]} {...otherProps} />;
}
