import { useState } from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Calendar, Input, Popover } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';

import type { Dayjs } from 'dayjs';

interface CustomCalendarPopoverProps {
	value?: Dayjs;
	onChange?: (date: Date) => void;
}

export const CustomCalendarPopover = ({
	value,
	onChange,
}: CustomCalendarPopoverProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
	};

	return (
		<Popover
			content={
				<div
					style={{
						maxWidth: 300,
					}}
				>
					<Calendar
						fullscreen={false}
						locale={locale}
						value={value ? dayjs(value) : undefined}
						onSelect={(date: Dayjs) => {
							onChange?.(date.toDate());
						}}
					/>
				</div>
			}
			open={isOpen}
			placement='bottomLeft'
			trigger='click'
			onOpenChange={handleOpenChange}
		>
			<Input
				placeholder='Выберите дату'
				style={{ cursor: 'pointer' }}
				suffix={<CalendarOutlined />}
				value={value ? dayjs(value).format('DD.MM.YYYY') : ''}
				readOnly
			/>
		</Popover>
	);
};
