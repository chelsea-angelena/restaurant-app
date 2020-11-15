import 'dotenv/config';
import React from 'react';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const YELP_API_KEY = process.env.EXPO_YELP_API_KEY;

export default {
	version: process.env.DEV || '1.0.0',
	ios: {
		bundleIdentifier: 'host.exp.exponent',

		infoPlist: {
			NSLocationWhenInUseUsageDescription:
				'This app uses location to provide local search results for restaurants.',
		}
	},
	android: {
		package: 'host.exp.exponent',
	},
	description:
		'This is a mobile app built using React-Native and Expo. Search for nearby restaurants. Results are determined by the type of dish or business name specified, and then filtered into 4 different price catgories. Each listed result has detailed information such as location, hours and photographs. ',
	extra: {
		apiKey: process.env.EXPO_YELP_API_KEY,
	},
};
