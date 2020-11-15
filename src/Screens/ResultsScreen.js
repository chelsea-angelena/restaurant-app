import React, { useContext, useState, useEffect } from 'react';
import yelp from '../api/yelp';
import { Dimensions } from 'react-native';
import { LocationContext } from '../../LocationContext';

import ResultScreenDetails from './ResultScreenDetails';

export default function ResultsScreen(props) {
	const [result, setResult] = useState(null);

	const id = props.route.params.id;
	const location = useContext(LocationContext);
	const {
		coords: { latitude, longitude },
	} = location;

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return <ResultScreenDetails result={result} lat={latitude} lon={longitude} />;
}
