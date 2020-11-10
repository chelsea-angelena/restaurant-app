import 'dotenv/config';
import React from 'react';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const YELP_API_KEY = process.env.EXPO_YELP_API_KEY;

export default {
	name: 'restaurantsearch',
	slug: 'restaurantsearch',
	// version: process.env.DEV || '1.0.0',
	extra: {
		apiKey: process.env.EXPO_YELP_API_KEY,
	},
};
