import * as React from 'react';
import ResultsShowScreen from '../Screens/ResultsScreen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoToRSS({ ResultsShowScreen }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(ResultsShowScreen)}
		></TouchableOpacity>
	);
}
