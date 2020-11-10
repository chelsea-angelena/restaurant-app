import React from 'react';
import { Button, Alert, View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function MyMap({ latitude, longitude, coords, name }) {
	let marker = { latitude, longitude };

	// let x0 = coords.latitude;
	// let x1 = coords.longitude;
	// let y0 = marker.latitude;
	// let y1 = marker.longitude;

	// const getDistance = async () => {
	// distance(x0, y0, x1, y1, K)

	// 	Alert.alert(distance);
	// 	console.log(distance(1, 1, 2, 3));
	// 	console.log(distance(-1, -1, 2, 3));
	// };
	return (
		<View>
			<MapView
				style={{ height: 320, width: 320 }}
				initialRegion={{
					latitude: latitude,
					longitude: longitude,
					latitudeDelta: 0.03,
					longitudeDelta: 0.03,
				}}
			>
				<Marker title={name} coordinate={coords} />
				<Marker title='me' coordinate={marker} />

				<Polyline />
			</MapView>
		</View>
	);
}
