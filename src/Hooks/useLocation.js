// import React, { useState, useEffect } from 'react';
// import * as Permissions from 'expo-permissions';
// import * as Location from 'expo-location';
// import { Button, View, Text } from 'react-native';

// const useLocation = () => {
// 	const [status, setStatus] = useState(null);
// 	const [error, setError] = useState('');
// 	const [loading, setLoading] = useState(true);
// 	const [location, setLocation] = useState(null);

// 	const getPosition = async () => {
// 		const { status, permissions } = await Permissions.askAsync(
// 			Permissions.LOCATION
// 		);
// 		if (status === 'granted') {
// 			setStatus('granted');
// 			let results = await Location.getCurrentPositionAsync({});
// 			setLocation(results.coords);
// 		} else {
// 			setError('Location permission not granted');
// 		}
// 		setLoading(false);
// 	};
// 	// let coords = position.coordinates;
// 	// let latitude = position.coordinates.latitude;
// 	// let longitude = position.coordinates.longitude;
// 	// let location = position.coordinates;

// 	useEffect(() => {
// 		getPosition();
// 	}, []);

// 	return [location, status, loading];
// };

// export default useLocation;

import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default function useLocation() {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync(
				Permissions.LOCATION
			);
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
			}

			let location = await Location.getLastKnownPositionAsync({});
			setLocation(location);
		})();
	}, []);

	return [location, errorMsg];
}
