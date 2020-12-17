// import { useState, useEffect } from 'react';

// import * as Location from 'expo-location';

// export default function useLocation() {
// 	const [latitude, setLatitude] = useState({});
// 	const [longitude, setLongitude] = useState({});
// 	const [loading, setLoading] = useState(true);

// 	// useEffect(() => {
// 	// 	(async () => {
// 	// 		let { status } = await Location.requestPermissionsAsync();
// 	// 		if (status !== 'granted') {
// 	// 			setErrorMsg('Permission to access location was denied');
// 	// 		}
// 	// 		let result = await Location.getCurrentPositionAsync({});
// 	// 		setLocation(result);
// 	// 	})();
// 	// 	setLoading(false);
// 	// }, []);

// 	useEffect(() => {
// 		(async () => {
// 			let { status } = await Location.requestPermissionsAsync();
// 			if (status !== 'granted') {
// 				setErrorMsg('Permission to access location was denied');
// 			}
// 			let location = await Location.getCurrentPositionAsync({});
// 			setLongitude(location.coords.longitude);
// 			setLatitude(location.coords.latitude);
// 		})();
// 		setLoading(false);
// 	}, []);

// 	// if (errorMsg) {
// 	// 	return 'errorMsg';
// 	// } else if (location) {
// 	// 	return JSON.stringify(location);
// 	// }

// 	return [latitude, longitude];
// }
