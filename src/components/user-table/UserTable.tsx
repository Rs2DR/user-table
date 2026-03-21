import { useMemo } from 'react';
import { Table } from 'antd';

import { filterUsers } from '@/utils/filterUsers';

import { getColumns } from './columns';

import type { User } from '@/types/user';
import type { TableProps } from 'antd';

interface UserTableProps extends Omit<TableProps<User>, 'columns'> {
	searchValue: string;
	onDelete: (id: string) => void;
	onEdit: (user: User) => void;
}

export const UserTable = ({
	searchValue,
	dataSource,
	onEdit,
	onDelete,
	...props
}: UserTableProps) => {
	const filteredData = useMemo(
		() => filterUsers(dataSource ?? [], searchValue),
		[searchValue, dataSource],
	);

	return (
		<Table<User>
			columns={getColumns({ onEdit, onDelete })}
			dataSource={filteredData}
			{...props}
		/>
	);
};
