import { FC, ReactNode } from 'react';

export const SmallButton: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return (
		<button className="cursor-pointer rounded bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-2 py-1 text-sm">
			{children}
		</button>
	);
};

export const Button: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return (
		<button className="cursor-pointer rounded-lg bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2">
			{children}
		</button>
	);
};

export const LargeButton: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return (
		<button className="cursor-pointer rounded-lg bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-5 md:py-3 md:text-lg">
			{children}
		</button>
	);
};
