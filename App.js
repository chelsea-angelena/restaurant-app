import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNav from './src/Navigation/MainNav';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Context as LocationContext } from './src/Context/LocationContext';
import useLocation from './src/Hooks/useLocation';
import colors from './src/style/colors';

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

export default App = () => {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<MainNav />
			</NavigationContainer>
		</PaperProvider>
	);
};
