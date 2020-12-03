import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import SearchScreen from '../Screens/SearchScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ResultsScreen from '../Screens/ResultsScreen';
import Welcome from '../WelcomeScreen/Welcome';
import colors from '../style/colors';
const Stack = createStackNavigator();

export default function MainNav() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.lighter,
				},
				headerTintColor: colors.red,
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen
				name='Search'
				component={SearchScreen}
				options={{ title: 'Search' }}
			/>
			<Stack.Screen
				name='ResultsScreen'
				component={ResultsScreen}
				options={{ title: 'Results' }}
			/>
		</Stack.Navigator>
	);
}
