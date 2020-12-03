import 'react-native-gesture-handler';
import React from 'react';
import { Dimensions, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function MyMap({
	userLatitude,
	userLongitude,
	resultCoords,
	name,
}) {
	return (
		<View>
			<MapView
				region={{
					latitude: resultCoords.latitude,
					longitude: resultCoords.longitude,
					latitudeDelta: 0.03,
					longitudeDelta: 0.03,
				}}
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
					latitude: resultCoords.latitude,
					longitude: resultCoords.longitude,
					latitudeDelta: 0.03,
					longitudeDelta: 0.03,
				}}
			>
				<Marker title={name} coordinate={resultCoords} />
			</MapView>
		</View>
	);
}
