import { useState } from 'react';
import { Button, Flex, Input } from 'antd';

import { UserTable } from '@/components/user-table';

const { Search } = Input;

const App = () => {
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = (value: string) => {
		setSearchValue(value);
	};

	return (
		<Flex gap='medium' orientation='vertical'>
			<Flex justify='space-between' orientation='horizontal'>
				<Button type='primary'>Добавить</Button>
				<Search
					placeholder='Поиск по таблице...'
					style={{ width: 200 }}
					allowClear
					onSearch={handleSearch}
				/>
			</Flex>
			<UserTable searchValue={searchValue} />
		</Flex>
	);
};

export default App;
