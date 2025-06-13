import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react';

type InputProps = {
	type?: HTMLInputTypeAttribute;
	id?: string;
	name?: string;
	placeholder?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	required?: boolean;
	readOnly?: boolean;
	disabled?: boolean;
};

export const Input: FC<InputProps> = ({
	type = 'text',
	id = '',
	name = '',
	placeholder = '',
	value = '',
	onChange = () => {},
	required = false,
	readOnly = false,
	disabled = false,
}) => {
	return (
		<input
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			className="w-full rounded-full border border-neutral-800 px-4 py-2 focus:outline-none"
			value={value}
			onChange={onChange}
			required={required}
			readOnly={readOnly}
			disabled={disabled}
		/>
	);
};
