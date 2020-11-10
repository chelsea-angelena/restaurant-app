import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { Button, View, Text } from 'react-native';

const useLocation = () => {
	const [status, setStatus] = useState(null);
	const [error, setError] = useState('');
	const [position, setPosition] = useState({
		coordinates: {
			latitude: '',
			longitude: '',
		},
	});
	const getPosition = async () => {
		const { status, permissions } = await Permissions.askAsync(
			Permissions.LOCATION
		);
		if (status === 'granted') {
			setStatus('granted');
			let results = await Location.getCurrentPositionAsync();
			setError('err');
			setPosition({
				coordinates: results.coords,
			});
			(e) => setError(e.message);
		} else {
			setError('Location permission not granted');
		}
	};
	let coords = position.coordinates;
	let latitude = position.coordinates.latitude;
	let longitude = position.coordinates.longitude;

	useEffect(() => {
		getPosition();
	}, []);

	return [latitude, longitude, status];
};

export default useLocation;
