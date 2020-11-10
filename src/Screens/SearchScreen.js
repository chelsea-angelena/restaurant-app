import React, { useState, useEffect } from 'react';
import {
	ScrollView,
	View,
	TextInput,
	StyleSheet,
	FlatList,
} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../Hooks/useResults';
import ResultsList from '../Components/ResultsList';
import useLocation from '../Hooks/useLocation';
import { Caption, Title, Text } from 'react-native-paper';
import colors from '../style/colors';

export default function SearchScreen(props) {
	const navigation = props.navigation;
	const [term, setTerm] = useState('');
	const [searchApi, results, error] = useResults();
	const [latitude, longitude] = useLocation();

	const filterResultsByPrice = (price) => {
		// price === '$' || '$$' || '$$$'
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<ScrollView style={styles.parent}>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>

			<Caption style={styles.caption}>
				We have found: {results.length} results
			</Caption>
			<Title style={styles.term}>{results.term}</Title>

			<View style={styles.list}>
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
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	parent: {
		flex: 1,
		backgroundColor: colors.red,
	},
	list: {
		backgroundColor: colors.red,
	},
	caption: {
		marginLeft: 15,
		color: colors.lighter,
		padding: 5,
	},
	term: {
		color: colors.lighter,
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
});
