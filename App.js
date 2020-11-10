// import 'react-native-gesture-handler';
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
import UseLocation from './src/Hooks/useLocation';
import * as Font from 'expo-font';
import { withTheme } from 'react-native-paper';

const fontConfig = {
	default: {
		regular: {
			fontFamily: 'Roboto',
			fontWeight: 'normal',
		},
		bold: {
			fontFamily: 'Roboto-Bold',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'Roboto-Medium',
			fontWeight: 'normal',
		},
		light: {
			fontFamily: 'Roboto-Light',
			fontWeight: 'normal',
		},
		thin: {
			fontFamily: 'Roboto-Thin',
			fontWeight: 'normal',
		},
		extraBold: {
			fontFamily: 'Montserrat',
			fontWeight: 'Black 900',
		},
	},
};
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
	fonts: configureFonts(fontConfig),
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<MainNav />
			</NavigationContainer>
		</PaperProvider>
	);
}
