import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';

import { formattedDate } from '@/utils/formattedDate';

import type { TableProps } from 'antd';

export interface DataType {
	key: string;
	name: string;
	age: number;
	date: Date | string | number;
}

export const columns: TableProps<DataType>['columns'] = [
	{
		title: 'Имя',
		dataIndex: 'name',
		key: 'name',
		sorter: (a, b) => a.name.localeCompare(b.name, 'ru'),
		showSorterTooltip: {
			title: 'Сортировать по имени',
		},
	},
	{
		title: 'Дата',
		dataIndex: 'date',
		key: 'date',
		defaultSortOrder: 'descend',
		sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
		showSorterTooltip: {
			title: 'Нажмите для сортировки по дате',
		},
		render: (_: unknown, { date }: DataType) => (
			<span>{formattedDate(date)}</span>
		),
	},
	{
		title: 'Возраст',
		dataIndex: 'age',
		key: 'age',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.age - b.age,
		showSorterTooltip: {
			title: 'Нажмите для сортировки по возрасту',
		},
	},
	{
		title: 'Действия',
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
