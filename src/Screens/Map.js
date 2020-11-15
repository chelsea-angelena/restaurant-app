import React from 'react';
import { Dimensions, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function MyMap({ latitude, longitude, coords, name }) {
	let marker = { latitude, longitude };

	let points = [
		{ latitude: marker.latitude, longitude: marker.longitude },
		{ latitude: coords.latitude, longitude: coords.longitude },
	];
	return (
		<View>
			<MapView
				style={{
					height: 320,
					width: screenWidth * 0.95,
					marginBottom: 32,
					marginRight: 16,
					marginLeft: 16,
					paddingLeft: 16,
					paddingRight: 16,
				}}
				initialRegion={{
					latitude: latitude,
					longitude: longitude,
					latitudeDelta: 0.03,
					longitudeDelta: 0.03,
				}}
			>
				<Marker title={name} coordinate={coords} />
				<Marker title='me' coordinate={marker} />

				<Polyline
					coordinates={points}
					strokeWidth={4}
					strokeColor='rgba(255,140,0,0.8)'
				/>
			</MapView>
		</View>
	);
}
