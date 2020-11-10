import React, { useState, useEffect } from 'react';
import {
	ScrollView,
	StyleSheet,
	Image,
	Text,
	FlatList,
	View,
} from 'react-native';
import yelp from '../api/yelp';
import { Title, Caption, Headline, Subheading, Card } from 'react-native-paper';
import colors from '../style/colors';
import { Dimensions } from 'react-native';
import MyMap from './Map';
import useLocation from '../Hooks/useLocation';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function ResultsScreen(props) {
	const [result, setResult] = useState(null);
	const [latitude, longitude] = useLocation();
	const id = props.route.params.id;

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}
	if (!latitude && longitude) {
		return <Text>Loading...</Text>;
	}
	// let photoId = Math.floor(Math.random * 899999);
	console.log(result.coords);

	return (
		<ScrollView>
			<View style={styles.view}>
				<Title style={styles.title}>{result.name}</Title>
				<Text style={styles.title}>Average Rating: {result.rating} Stars</Text>
				<Text style={styles.title}>
					Numer of Reviews: {result.review_count}
				</Text>
				<Text style={styles.text}>Services Offered: {result.transactions}</Text>
				<Text style={styles.text}>
					Currently:
					{result.hours.is_open_now ? (
						<Text style={styles.text}> Open </Text>
					) : (
						<Text style={styles.text}> Closed</Text>
					)}
				</Text>
				<Text style={styles.text}>{result.display_phone}</Text>
				<Text style={(styles.text, styles.address)}>
					{result.location.display_address}
				</Text>
				<Text style={styles.text}>{result.location.address1}</Text>
				<Text style={styles.text}>{result.location.address2}</Text>
				<Text style={styles.text}>{result.location.address3}</Text>
				<Text style={styles.text}>{result.location.city}</Text>
				<MyMap
					latitude={latitude}
					longitude={longitude}
					coords={result.coordinates}
					name={result.name}
				/>
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
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 'auto',
		padding: 10,
		height: 500,
	},
	card: {
		width: screenWidth,
		height: screenHeight,
	},
	text: {
		color: 'white',
		padding: 2.5,
	},
	view: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: colors.red,
		flex: 1,
		paddingTop: 20,
	},
	title: {
		color: 'white',
	},
	address: {
		color: 'white',
		paddingTop: 5,
		paddingBottom: 20,
	},
});
