import { Input, Button, Form, InputNumber } from 'antd';

import { CustomCalendarPopover } from '../custom-calendar-popover';

import type { User } from '@/types/user';

interface UserFormProps {
	initialValues?: Partial<User>;
	onSubmit: (user: User) => void;
}

export const UserForm = ({ initialValues, onSubmit }: UserFormProps) => {
	const [form] = Form.useForm<User>();

	const handleFinish = (values: User) => {
		onSubmit({
			...values,
			id: initialValues?.id || crypto.randomUUID(),
		});
	};

	return (
		<Form
			form={form}
			initialValues={initialValues}
			layout='vertical'
			onFinish={handleFinish}
		>
			<Form.Item
				label='Имя'
				name='name'
				rules={[{ required: true, message: 'Имя обязательно' }]}
			>
				<Input placeholder='Введите имя' />
			</Form.Item>

			<Form.Item
				label='Дата'
				name='date'
				rules={[{ required: true, message: 'Выберите дату' }]}
			>
				<CustomCalendarPopover />
			</Form.Item>

			<Form.Item
				label='Возраст'
				name='age'
				rules={[
					{ required: true, message: 'Укажите возраст' },
					{ type: 'number', min: 0, message: 'Возраст должен быть больше 0' },
					{
						type: 'number',
						max: 130,
						message: 'Возраст не может быть больше 130',
					},
				]}
			>
				<InputNumber placeholder='Возраст' style={{ width: '100%' }} />
			</Form.Item>

			<Button htmlType='submit' type='primary' block>
				Сохранить
			</Button>
		</Form>
	);
};
