import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/Navigation/MainNav';

export default App = () => {
	return (
		<NavigationContainer>
			<MainNav />
		</NavigationContainer>
	);
};
