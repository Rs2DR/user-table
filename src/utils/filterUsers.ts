import { formattedDate } from './formattedDate';

import type { User } from '@/types/user';

export const filterUsers = (users: readonly User[], query: string): User[] => {
	if (!query) return [...users];

	const lowerQuery = query.toLowerCase();

	return users.filter(user =>
		(Object.keys(user) as (keyof User)[]).some(key => {
			const value = user[key];

			const displayValue =
				key === 'date'
					? formattedDate(value as string | number | Date)
					: String(value ?? '');

			return displayValue.toLowerCase().includes(lowerQuery);
		}),
	);
};
