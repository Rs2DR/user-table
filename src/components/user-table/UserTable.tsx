import { useMemo } from 'react';
import { Table } from 'antd';

import { columns } from './columns';

import type { DataType } from './columns';

const now = Date.now();

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		date: now,
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		date: now - 1 * 24 * 60 * 60 * 1000, // -1 день
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		date: now - 2 * 24 * 60 * 60 * 1000,
	},
	{
		key: '4',
		name: 'John Brown',
		age: 32,
		date: now - 3 * 24 * 60 * 60 * 1000,
	},
	{
		key: '5',
		name: 'Jim Green',
		age: 42,
		date: now - 4 * 24 * 60 * 60 * 1000,
	},
	{
		key: '6',
		name: 'Joe Black',
		age: 32,
		date: now - 5 * 24 * 60 * 60 * 1000,
	},
	{
		key: '7',
		name: 'John Brown',
		age: 32,
		date: now - 6 * 24 * 60 * 60 * 1000,
	},
	{
		key: '8',
		name: 'Jim Green',
		age: 42,
		date: now - 7 * 24 * 60 * 60 * 1000,
	},
	{
		key: '9',
		name: 'Joe Black',
		age: 32,
		date: now - 8 * 24 * 60 * 60 * 1000,
	},
	{
		key: '10',
		name: 'John Brown',
		age: 32,
		date: now - 9 * 24 * 60 * 60 * 1000,
	},
	{
		key: '11',
		name: 'Jim Green',
		age: 42,
		date: now - 10 * 24 * 60 * 60 * 1000,
	},
	{
		key: '12',
		name: 'Joe Black',
		age: 32,
		date: now - 11 * 24 * 60 * 60 * 1000,
	},
];

interface UserTableProps {
	searchValue: string;
}

export const UserTable = ({ searchValue }: UserTableProps) => {
	const filteredData = useMemo(() => {
		if (!searchValue) return data;

		const lowerSearch = searchValue.toLowerCase();

		return data.filter(item =>
			Object.values(item).some(value =>
				String(value).toLowerCase().includes(lowerSearch),
			),
		);
	}, [searchValue]);

	return <Table<DataType> columns={columns} dataSource={filteredData} />;
};
