import { useState } from 'react';
import { Button, Flex, Input } from 'antd';

import { UserTable } from '@/components/user-table';

import { UserModal } from './components/user-modal';
import { initialUsers } from './mocks/users';

import type { User } from './types/user';

const { Search } = Input;

const App = () => {
	const [users, setUsers] = useState(initialUsers);
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = (value: string) => {
		setSearchValue(value);
	};

	const handleAddUser = (user: User) => {
		setUsers(prev => [...prev, user]);
	};

	return (
		<Flex gap='medium' vertical>
			<Flex justify='space-between'>
				<UserModal
					title='Добавить пользователя'
					trigger={<Button type='primary'>Добавить</Button>}
					onSubmit={handleAddUser}
				/>
				<Search
					placeholder='Поиск по таблице...'
					style={{ width: 200 }}
					allowClear
					onSearch={handleSearch}
				/>
			</Flex>
			<UserTable dataSource={users} searchValue={searchValue} />
		</Flex>
	);
};

export default App;
