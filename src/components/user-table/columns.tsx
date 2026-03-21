import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';

import { UserModal } from '../user-modal';
import { formattedDate } from '@/utils/formattedDate';

import type { User } from '@/types/user';
import type { TableProps } from 'antd';

interface GetColumnsArgs {
	onDelete: (id: string) => void;
	onEdit: (user: User) => void;
}

export const getColumns = ({
	onDelete,
	onEdit,
}: GetColumnsArgs): TableProps<User>['columns'] => [
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
		render: (_: unknown, { date }: User) => <span>{formattedDate(date)}</span>,
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
		render: (_: unknown, data: User) => {
			const { name, id } = data;

			const handleEdit = (user: User) => {
				onEdit(user);
			};

			const handleDelete = () => {
				onDelete(id);
			};

			return (
				<Space size='medium'>
					<UserModal
						initialValues={data}
						title='Редактировать пользователя'
						trigger={
							<Tooltip title={`Редактировать ${name}`}>
								<Button icon={<EditOutlined />} type='primary' />
							</Tooltip>
						}
						onSubmit={handleEdit}
					/>
					<Tooltip title={`Удалить ${name}`}>
						<Button
							icon={<DeleteOutlined />}
							type='primary'
							danger
							onClick={handleDelete}
						/>
					</Tooltip>
				</Space>
			);
		},
	},
];
