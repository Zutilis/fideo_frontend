export const getMonthName = (monthIndex: number): string => {
	const months = [
		'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
	];
	return months[monthIndex] ?? '';
};

export const formatDetails = (...args: (string | number | undefined)[]) =>
	args.filter(Boolean).join(' ⸱ ');