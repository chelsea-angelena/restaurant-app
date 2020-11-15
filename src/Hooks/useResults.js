import React, { useState, useEffect, useContext } from 'react';
import yelp from '../api/yelp';
import useLocation from './useLocation';
import { LocationContext } from '../../LocationContext';
import Constants from 'expo-constants';

export default function useResults() {
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);
	const location = useContext(LocationContext);

	const searchApi = async (searchTerm) => {
		const {
			coords: { latitude, longitude },
		} = location;
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					latitude: latitude,
					longitude: longitude,
					radius: 10000,
				},
			});

			setResults(response.data.businesses);
		} catch (err) {
			setError(err);
		}
	};

	useEffect(() => {
		searchApi('coffee');
	}, []);

	return [searchApi, results, error];
}
