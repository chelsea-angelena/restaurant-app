module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		env: {
			production: {
				plugins: ['react-native-paper/babel'],
			},
		},

		plugins: [
			[
				'transform-inline-environment-variables',
				{
					include: ['API_KEY'],
				},
			],
		],
	};
};
// without options

// with options
