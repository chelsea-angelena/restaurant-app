import React, { useState, useEffect } from 'react';
import colors from '../style/colors';
import { Button, Text, Title, Headline } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import useResults from '../Hooks/useResults';
import useLocation from '../Hooks/useLocation';

export default function Welcome(props) {
	const [searchApi, results, error] = useResults();
	const navigation = props.navigation;

	useEffect(() => {
		searchApi('pasta');
	}, []);

	return (
		<View style={styles.view}>
			<Text style={styles.title}>Welcome!</Text>
			<Headline style={styles.headline}>
				Search your favorite cuisine to find local restaurants near you!
			</Headline>
			<Button
				autoCapitalize={false}
				labelStyle={{
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: 18,
					fontWeight: 'bold',
				}}
				color={colors.red}
				style={styles.button}
				mode='outlined'
				titleStyle={{
					color: colors.red,
				}}
				title='Find Restaurants!'
				onPress={() => navigation.navigate('Search')}
			>
				Find Restaurants!
			</Button>
		</View>
	);
}
const styles = StyleSheet.create({
	view: {
		height: '100%',
		backgroundColor: colors.red,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	title: {
		color: 'white',
		fontFamily: 'Avenir',
		fontWeight: 'bold',
		fontSize: 54,
	},
	headline: {
		color: 'white',
		fontFamily: 'Avenir',
		fontWeight: 'normal',
		fontSize: 16,
		lineHeight: 42,
		paddingLeft: 48,
		paddingRight: 48,
		marginBottom: 48,
	},
	text: {
		fontSize: 18,
		marginRight: 24,
		marginLeft: 24,
		color: colors.light,
	},
	button: {
		width: '75%',
		height: 88,
		backgroundColor: colors.light,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
