import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import {
	ScrollView,
	ImageBackground,
	StyleSheet,
	Platform,
	Image,
	Text,
	FlatList,
	View,
} from 'react-native';

import { Title, Card } from 'react-native-paper';

import { Dimensions } from 'react-native';
import MyMap from './Map';
import { Context as LocationContext } from '../Context/LocationContext';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function ResultScreenDetails({ result }) {
	const { coordinates } = result;

	return (
		<ScrollView>
			<ImageBackground
				alt='background'
				resizeMode='cover'
				style={{
					width: '100%',
					height: '100%',
					resizeMode: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
				source={{
					uri:
						'https://images.unsplash.com/photo-1485795046599-702122cd1267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
				}}
			>
				<View style={styles.view}>
					<Title style={styles.title}>{result.name}</Title>
					<Text style={styles.subTitle}>
						Average Rating: {result.rating} Stars
					</Text>
					<Text style={styles.subTitle}>
						Numer of Reviews: {result.review_count}
					</Text>
					<Text style={styles.bold}>Services Offered:</Text>
					<Text style={styles.text}>{result.transactions}</Text>
					<Text style={styles.text}>{result.display_phone}</Text>
					<Text style={(styles.text, styles.address)}>
						{result.location.display_address}
					</Text>
					<Text style={styles.text}>{result.location.address1}</Text>
					<Text style={styles.text}>{result.location.address2}</Text>
					<Text style={styles.text}>{result.location.address3}</Text>
					<Text style={styles.text}>{result.location.city}</Text>

					<FlatList
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						data={result.photos}
						keyExtractor={(photo) => photo + Math.floor(Math.random() * 899999)}
						renderItem={({ item }) => {
							return (
								<Card style={styles.card}>
									<Card.Cover source={{ uri: item }} style={styles.image} />
								</Card>
							);
						}}
					/>
					<MyMap resultCoords={coordinates} name={result.name} />
				</View>
			</ImageBackground>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 'auto',
		padding: 10,
		height: 500,
		marginRight: 12,
	},
	card: {
		width: screenWidth * 0.9,
		marginBottom: 24,
	},
	text: {
		color: 'white',
		padding: 2.5,
		fontSize: 16,
		lineHeight: 24,
	},
	view: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		paddingTop: 20,
	},
	title: {
		color: 'white',
		fontSize: 24,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
	subTitle: {
		fontSize: 16,
		lineHeight: 32,
		color: 'white',
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
	bold: {
		color: 'white',
		padding: 2.5,
		fontSize: 16,
		lineHeight: 24,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
	address: {
		color: 'white',
		fontSize: 16,
		lineHeight: 24,
		paddingTop: 5,
		paddingBottom: 20,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
});
