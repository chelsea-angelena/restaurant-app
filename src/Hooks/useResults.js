import React, { useState, useEffect, useContext } from 'react';
import yelp from '../api/yelp';

export default function useResults() {
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'Victoria, British Columbia',
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
