import { cloneElement, useState } from 'react';
import { Modal } from 'antd';

import { UserForm } from '../user-form';

import type { User } from '@/types/user';
import type { HTMLAttributes, ReactElement } from 'react';

interface UserModalProps {
	trigger: ReactElement<HTMLAttributes<HTMLElement>>;
	initialValues?: Partial<User>;
	onSubmit: (values: User) => void;
	title?: string;
}

export const UserModal = ({
	trigger,
	initialValues,
	title,
	onSubmit,
}: UserModalProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleShowModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleSubmit = (values: User) => {
		onSubmit(values);
		setIsModalOpen(false);
	};

	const triggerElement = cloneElement(trigger, {
		onClick: handleShowModal,
	});

	return (
		<>
			{triggerElement}

			<Modal
				closable={{ 'aria-label': 'Custom Close Button' }}
				footer={null}
				open={isModalOpen}
				title={title}
				destroyOnHidden
				onCancel={handleCancel}
			>
				<UserForm initialValues={initialValues} onSubmit={handleSubmit} />
			</Modal>
		</>
	);
};
