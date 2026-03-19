import { Table } from 'antd';

import { formattedDate } from '@/utils/formattedDate';

import { columns } from './columns';

import type { DataType } from './columns';

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		date: formattedDate(Date.now()),
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		date: formattedDate(Date.now()),
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		date: formattedDate(Date.now()),
	},
	{
		key: '4',
		name: 'John Brown',
		age: 32,
		date: formattedDate(Date.now()),
	},
	{
		key: '5',
		name: 'Jim Green',
		age: 42,
		date: formattedDate(Date.now()),
	},
	{
		key: '6',
		name: 'Joe Black',
		age: 32,
		date: formattedDate(Date.now()),
	},
	{
		key: '7',
		name: 'John Brown',
		age: 32,
		date: formattedDate(Date.now()),
	},
	{
		key: '8',
		name: 'Jim Green',
		age: 42,
		date: formattedDate(Date.now()),
	},
	{
		key: '9',
		name: 'Joe Black',
		age: 32,
		date: formattedDate(Date.now()),
	},
	{
		key: '10',
		name: 'John Brown',
		age: 32,
		date: formattedDate(Date.now()),
	},
	{
		key: '11',
		name: 'Jim Green',
		age: 42,
		date: formattedDate(Date.now()),
	},
	{
		key: '12',
		name: 'Joe Black',
		age: 32,
		date: formattedDate(Date.now()),
	},
];

export const UserTable = () => (
	<Table<DataType> columns={columns} dataSource={data} />
);
