import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../style/colors';

const SearchBar = ({
	term,
	onTermChange,
	onTermSubmit,
	lat,
	lon,
}) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder='Search'
				value={term}
				latitude={lat}
				longitude={lon}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 10,
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});

export default SearchBar;


