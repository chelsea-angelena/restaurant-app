import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import useLocation from './useLocation';
import Constants from 'expo-constants';

export default function useResults() {
	const [results, setResults] = useState([]);
	const [error, setError] = useState('');
	const [latitude, longitude, status] = useLocation();

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					latitude: latitude,
					longitude: longitude,
					radius: 1500,
				},
			});

			setResults(response.data.businesses);
		} catch (err) {
			setError(err);
		}
	};

	useEffect(() => {
		searchApi('pasta');
	}, []);

	return [searchApi, results, error];
}
