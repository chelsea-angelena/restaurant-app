import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Stars({rating }) {
	if (rating === 1) {
		return <FontAwesome name='star' size={24} color='black' />;
	}

	if (rating === 1.5) {
		return (
			<>
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star-half' size={24} />
			</>
		);
	}

	if (rating === 2) {
		return (
			<>
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
			</>
		);
	}
	if (rating === 2.5) {
		return (
			<>
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star-half' size={24} />
			</>
		);
	}
	if (rating === 3) {
		return (
			<>
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
			</>
		);
	}
	if (rating === 3.5) {
		return (
			<>
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star-half' size={24} />
			</>
		);
	}
	if (rating === 4) {
		return (
			<>
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
			</>
		);
	}
	if (rating === 4.5) {
		return (
			<>
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star-half' size={24} />
			</>
		);
	}

	if (rating === 5) {
		return (
			<>
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
				<FontAwesome name='star' size={24} color='black' />
			</>
		);
	}
	return null;
}
