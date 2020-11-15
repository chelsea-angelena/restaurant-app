import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/Navigation/MainNav';
import {
	configureFonts,
	DefaultTheme,
	Provider as PaperProvider,
} from 'react-native-paper';
import colors from './src/style/colors';
import useLocation from './src/Hooks/useLocation';
import * as Font from 'expo-font';
import { withTheme } from 'react-native-paper';
import { LocationContext } from './LocationContext';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: colors.red,
		accent: colors.black,
		background: colors.red,
		surface: colors.red,
		error: '#B00020',
		text: colors.black,
		onBackground: colors.red,
		onSurface: colors.lighter,
	},
};

export default function App() {
	const [location] = useLocation();

	if (!location) {
		return <Text>Loading</Text>;
	}
	return (
		<LocationContext.Provider value={location}>
			<PaperProvider theme={theme}>
				<NavigationContainer>
					<MainNav />
				</NavigationContainer>
			</PaperProvider>
		</LocationContext.Provider>
	);
}
