export const formattedDate = (date: Date | string | number): string => {
	const d = new Date(date);

	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};

	return d.toLocaleDateString('ru-RU', options);
};
