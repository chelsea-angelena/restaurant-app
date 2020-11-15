import React, { useContext, useState } from 'react';
import {
	ScrollView,
	View,
	ImageBackground,
	Platform,
	StyleSheet,
} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../Hooks/useResults';
import ResultsList from '../Components/ResultsList';
import { Caption } from 'react-native-paper';
import colors from '../style/colors';
import Welcome from '../WelcomeScreen/Welcome';
import { LocationContext } from '../../LocationContext';

export default function SearchScreen(props) {
	const navigation = props.navigation;
	const [term, setTerm] = useState('');
	const [searchApi, results, error] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<ScrollView style={styles.parent}>
			<View
				style={{
					height: 72,
					backgroundColor: '#212121',
				}}
			>
				<SearchBar
					term={term}
					onTermChange={setTerm}

					onTermSubmit={() => searchApi(term)}
				/>
			</View>
			{results.length === 0 ? (
				<Welcome />
			) : (
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
								'https://images.unsplash.com/photo-1485795046599-702122cd1267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
						}}
					>
						<View style={styles.list}>
							<Caption style={styles.caption}>
								{results.length} results for: {term}
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
			)}
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
