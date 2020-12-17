import 'dotenv/config';

const YELP_API_KEY = process.env.EXPO_YELP_API_KEY;

export default {
	name: 'restaurantapp',
	slug: 'restaurantapp',
	version: '1.0.0',
	orientation: 'portrait',
	icon: './assets/icon.png',
	splash: {
		image: './assets/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#ffffff',
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ['**/*'],
	ios: {
		supportsTablet: true,
		buildNumber: '1.0.0',
		bundleIdentifier: 'host.exp.exponent',
		googleServicesFile: './GoogleService-Info.plist',
		infoPlist: {
			NSLocationAlwaysUsageDescription:
				'This app uses location to provide local search results for restaurants.',
			UIBackgroundModes: ['fetch', 'remote-notification'],
		},
	},
	android: {
		package: 'host.exp.exponent',
	},
	description:
		'This is a mobile app built using React-Native and Expo. Search for nearby restaurants. Results are determined by the type of dish or business name specified, and then filtered into 4 different price categories. Each listed result has detailed information such as location, hours and photographs. ',
	extra: {
		apiKey: YELP_API_KEY,
	},
};
