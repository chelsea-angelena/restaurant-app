import React, { useState, useEffect, useContext } from 'react';
import yelp from '../api/yelp';
import useLocation from './useLocation';

export default function useResults() {
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);
	const [latitude, longitude] = useLocation();
	const searchApi = async (searchTerm) => {
		console.log(latitude, longitude);
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					latitude: latitude,
					longitude: longitude,
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
