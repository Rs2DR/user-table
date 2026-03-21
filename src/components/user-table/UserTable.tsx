import { useMemo } from 'react';
import { Table } from 'antd';

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
	const filteredData = useMemo(() => {
		if (!searchValue) return dataSource;

		if (!dataSource) return [];

		const lowerSearch = searchValue.toLowerCase();

		return dataSource.filter(item =>
			Object.values(item).some(value =>
				String(value).toLowerCase().includes(lowerSearch),
			),
		);
	}, [searchValue, dataSource]);

	return <Table<User> columns={columns} dataSource={filteredData} {...props} />;
};
