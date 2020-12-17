import React, { useState } from 'react';
import {
	ScrollView,
	View,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

import useResults from '../Hooks/useResults';
import ResultsList from '../Components/ResultsList';
import { Caption } from 'react-native-paper';
import colors from '../style/colors';

export default function SearchScreen(props) {
	const [searchTerm, setSearchTerm] = useState('');
	const navigation = props.navigation;
	const [searchApi, results] = useResults();

	const updateSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<ScrollView style={styles.parent}>
			<View
				style={{
					backgroundColor: '#212121',
				}}
			>
				<>
					<Searchbar
						placeholder='Type Here to Search...'
						term={searchTerm}
						onChangeText={updateSearch}
						onEndEditing={() => searchApi(searchTerm)}
						// onTermSubmit=
					/>
					{/* <Button onPress={submitSearch} title='Search' /> */}

					<Text>{searchTerm}</Text>

					{results.length > 0 ? (
						<View style={{ backgroundColor: '#212121' }}>
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
									paddingBottom: 32,
								}}
								source={{
									uri:
										'https:images.unsplash.com/photo-1485795046599-702122cd1267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
								}}
							>
								<View style={styles.list}>
									<Caption style={styles.caption}>
										{results.length} results for: {searchTerm}
									</Caption>
									<ResultsList
										navigation={navigation}
										results={filterResultsByPrice('$')}
										title='Best Value $'
									/>

									<ResultsList
										navigation={navigation}
										results={filterResultsByPrice('$$')}
										title='Moderate $$'
									/>

									<ResultsList
										navigation={navigation}
										results={filterResultsByPrice('$$$')}
										title='Pricey $$$'
									/>

									<ResultsList
										navigation={navigation}
										results={filterResultsByPrice('$$$$')}
										title='Expensive $$$$'
									/>
								</View>
							</ImageBackground>
						</View>
					) : null}
				</>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	parent: {
		flex: 1,
	},
	list: {
		backgroundColor: 'rgba(0,0,0,0.7)',
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		paddingBottom: 32,
	},
	caption: {
		marginLeft: 15,
		color: colors.lighter,
		padding: 5,
		alignSelf: 'center',
		fontSize: 18,
		borderBottomWidth: 1,
		width: '80%',
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		borderBottomColor: 'white',
	},
	term: {
		color: colors.lighter,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
	divider: {
		color: 'white',
		width: '90%',
		borderStyle: 'solid',
		marginTop: 20,
		marginBottom: 20,
		height: 3,
		alignSelf: 'center',
	},
	title: {
		color: 'white',
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		fontWeight: 'bold',
		fontSize: 54,
		alignSelf: 'center',
		marginTop: 164,
	},
	headline: {
		color: 'white',

		fontWeight: 'normal',
		fontSize: 16,
		lineHeight: 42,
		paddingLeft: 48,
		paddingRight: 48,
		marginBottom: 48,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
	intro: { justifyContent: 'center', height: 500 },
});
