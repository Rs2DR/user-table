import { CalendarOutlined } from '@ant-design/icons';
import { Input, Button, Form, Calendar, Popover, InputNumber } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';

import type { User } from '@/types/user';
import type { Dayjs } from 'dayjs';

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
			{/* Имя */}
			<Form.Item
				label='Имя'
				name='name'
				rules={[{ required: true, message: 'Имя обязательно' }]}
			>
				<Input placeholder='Введите имя' />
			</Form.Item>

			{/* Дата через Popover + Calendar */}
			<Form.Item
				label='Дата'
				name='date'
				rules={[{ required: true, message: 'Выберите дату' }]}
			>
				{/* В Ant Design Form.Item передает value и onChange дочернему компоненту автоматически */}
				<CustomCalendarPopover />
			</Form.Item>

			{/* Возраст */}
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
				<InputNumber style={{ width: '100%' }} />
			</Form.Item>

			<Button htmlType='submit' type='primary' block>
				Сохранить
			</Button>
		</Form>
	);
};

const CustomCalendarPopover = ({ value, onChange }: any) => (
	<Popover
		content={
			<div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
				<Calendar
					fullscreen={false}
					locale={locale}
					value={value ? dayjs(value) : undefined}
					onSelect={(date: Dayjs) => onChange?.(date.toDate())}
				/>
			</div>
		}
		placement='bottomLeft'
		trigger='click'
	>
		<Input
			placeholder='Выберите дату'
			style={{ cursor: 'pointer' }}
			suffix={<CalendarOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
			value={value ? dayjs(value).format('DD.MM.YYYY') : ''}
			readOnly
		/>
	</Popover>
);
