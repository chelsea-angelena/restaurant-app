import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Title, Surface, Caption, Text, Headline } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import colors from '../style/colors';

export default function ResultsDetail({ result, navigation }) {
	return (
		<Surface style={styles.surface}>
			<Title style={styles.title}>{result.name}</Title>
			<Headline style={styles.title}>{result.categories.title}</Headline>
			<Text style={styles.title}>
				{result.rating} <Ionicons name='md-star' size={20} color='black' />
				's
			</Text>
			<Image source={{ uri: result.image_url }} style={styles.image} />
		</Surface>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		margin: 5,
	},
	image: {
		width: 375,
		height: 200,
		borderRadius: 8,
		paddingBottom: 10,
	},
	surface: {
		borderRadius: 8,
		marginVertical: 25,
		padding: 8,
		paddingBottom: 16,
		height: 'auto',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end',
		elevation: 4,
		backgroundColor: colors.light,
	},
	view: {
		width: '100%',
	},
});
