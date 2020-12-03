import 'react-native-gesture-handler';
import React from 'react';
import colors from '../style/colors';
import { Text, Headline } from 'react-native-paper';
import { Platform, ImageBackground, View, StyleSheet } from 'react-native';

export default function Welcome(props) {
	return (
		<ImageBackground
			alt='background'
			resizeMode='cover'
			style={{
				width: '100%',
				height: 800,
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
				<Text style={styles.title}>Welcome!</Text>
				<Headline style={styles.headline}>
					Search your favorite cuisine to find local restaurants near you!
				</Headline>
			</View>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	view: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: 800,
	},
	title: {
		color: 'white',
		marginTop: 32,
		fontFamily: 'Avenir',
		fontWeight: 'bold',
		fontSize: 54,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
	headline: {
		color: 'white',
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
		fontWeight: 'normal',
		fontSize: 22,
		paddingLeft: 64,
		paddingRight: 64,
		marginTop: 32,
		marginLeft: 32,
		marginRight: 32,
	},
	text: {
		fontSize: 18,
		marginRight: 24,
		marginLeft: 24,
		color: colors.light,
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
	},
});
