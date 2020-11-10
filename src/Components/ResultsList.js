import React from 'react';
import {
	TouchableOpacity,
	ScrollView,
	View,
	StyleSheet,
	FlatList,
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import ResultsScreen from '../Screens/ResultsScreen';
import { Surface, Title, Caption, Text, Headline } from 'react-native-paper';
import colors from '../style/colors';

export default function ResultsList({
	title,
	results,
	navigation,
	ResultsScreen,
}) {
	if (!results.length) {
		return null;
	}
	return (
		<ScrollView>
			<Headline style={styles.title}>{title}</Headline>
			<Caption style={styles.resultLength}>
				There are: {results.length} results
			</Caption>
			<View style={styles.listView}>
				<FlatList
					horizontal={true}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					data={results}
					keyExtractor={(result) => result.id}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={styles.surface}
								onPress={() =>
									navigation.navigate('ResultsScreen', {
										id: item.id,
									})
								}
							>
								<ResultsDetail result={item} />
							</TouchableOpacity>
						);
					}}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.lighter,
		alignSelf: 'center',
		paddingTop: 10,
	},
	resultLength: {
		color: colors.lighter,
		alignSelf: 'center',
		paddingBottom: 10,
	},
	surface: {
		marginLeft: 15,
		marginTop: 0,
		marginBottom: 0,
	},
	listView: {
		backgroundColor: 'hsl(180, 1%, 75%)',
	},
});
