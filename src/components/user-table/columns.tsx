import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Input, Space, Tooltip } from 'antd';

import { formattedDate } from '@/utils/formattedDate';

import type { TableProps } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';

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
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}: FilterDropdownProps) => (
			<div style={{ padding: 8 }}>
				<Input
					placeholder='Поиск по имени'
					style={{ marginBottom: 8, display: 'block' }}
					value={selectedKeys[0]}
					onChange={e =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => confirm()}
				/>

				<Space>
					<Button type='primary' onClick={() => confirm()}>
						Найти
					</Button>
					<Button
						onClick={() => {
							clearFilters?.();
							confirm();
						}}
					>
						Сброс
					</Button>
				</Space>
			</div>
		),
		onFilter: (value, record) =>
			record.name.toLowerCase().includes((value as string).toLowerCase()),
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
