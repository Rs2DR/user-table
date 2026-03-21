import { useMemo } from 'react';
import { Table } from 'antd';

import { filterUsers } from '@/utils/filterUsers';

import { columns } from './columns';

import type { User } from '@/types/user';
import type { TableProps } from 'antd';

interface UserTableProps extends Omit<TableProps<User>, 'columns'> {
	searchValue: string;
}

export const UserTable = ({
	searchValue,
	dataSource,
	...props
}: UserTableProps) => {
	const filteredData = useMemo(
		() => filterUsers(dataSource ?? [], searchValue),
		[searchValue, dataSource],
	);

	return <Table<User> columns={columns} dataSource={filteredData} {...props} />;
};
