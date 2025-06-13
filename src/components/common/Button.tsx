import { FC, ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonSize = 'sm' | 'md' | 'lg';

export const Button: FC<{ size?: ButtonSize; type?: ButtonType; children: ReactNode }> = ({
	size = 'md',
	type = 'button',
	children = <></>,
}) => {
	if (size === 'sm') {
		return (
			<button
				type={type}
				className="cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm">
				{children}
			</button>
		);
	}

	if (size === 'lg') {
		return (
			<button
				type={type}
				className="cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-5 md:py-3 md:text-lg">
				{children}
			</button>
		);
	}

	return (
		<button
			type={type}
			className="cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base">
			{children}
		</button>
	);
};

export const OutlineButton: FC<{ type?: ButtonType; children: ReactNode }> = ({
	type = 'button',
	children = <></>,
}) => {
	return (
		<div className="overflow-hidden rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 p-[1px]">
			<button
				type={type}
				className="w-full cursor-pointer rounded-full bg-neutral-900 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base">
				{children}
			</button>
		</div>
	);
};
