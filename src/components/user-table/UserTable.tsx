import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table, Tooltip } from 'antd';

import type { TableProps } from 'antd';

import { formattedDate } from '@/utils/formattedDate';

interface DataType {
	key: string;
	name: string;
	age: number;
	date: string;
}

const columns: TableProps<DataType>['columns'] = [
	{
		title: 'Имя',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Дата',
		dataIndex: 'date',
		key: 'date',
	},
	{
		title: 'Возраст',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Action',
		key: 'action',
		render: (_: unknown, { name }: DataType) => (
			<Space size='medium'>
				<Tooltip title={`Delete ${name}`}>
					<Button icon={<DeleteOutlined />} type='primary' />
				</Tooltip>
				<Tooltip title={`Edit ${name}`}>
					<Button icon={<EditOutlined />} type='primary' />
				</Tooltip>
			</Space>
		),
	},
];

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
];

export const UserTable = () => (
	<Table<DataType> columns={columns} dataSource={data} />
);
