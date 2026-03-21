import type { User } from '@/types/user';

const now = Date.now();

export const initialUsers: User[] = [
	{
		id: '',
		name: 'John Brown',
		age: 32,
		date: now,
	},
	{
		id: '2',
		name: 'Jim Green',
		age: 42,
		date: now - 1 * 24 * 60 * 60 * 1000,
	},
	{
		id: '3',
		name: 'Joe Black',
		age: 32,
		date: now - 2 * 24 * 60 * 60 * 1000,
	},
	{
		id: '4',
		name: 'John Brown',
		age: 32,
		date: now - 3 * 24 * 60 * 60 * 1000,
	},
	{
		id: '5',
		name: 'Jim Green',
		age: 42,
		date: now - 4 * 24 * 60 * 60 * 1000,
	},
	{
		id: '6',
		name: 'Joe Black',
		age: 32,
		date: now - 5 * 24 * 60 * 60 * 1000,
	},
	{
		id: '7',
		name: 'John Brown',
		age: 32,
		date: now - 6 * 24 * 60 * 60 * 1000,
	},
	{
		id: '8',
		name: 'Jim Green',
		age: 42,
		date: now - 7 * 24 * 60 * 60 * 1000,
	},
	{
		id: '9',
		name: 'Joe Black',
		age: 32,
		date: now - 8 * 24 * 60 * 60 * 1000,
	},
	{
		id: '10',
		name: 'John Brown',
		age: 32,
		date: now - 9 * 24 * 60 * 60 * 1000,
	},
	{
		id: '11',
		name: 'Jim Green',
		age: 42,
		date: now - 10 * 24 * 60 * 60 * 1000,
	},
	{
		id: '12',
		name: 'Joe Black',
		age: 32,
		date: now - 11 * 24 * 60 * 60 * 1000,
	},
];
