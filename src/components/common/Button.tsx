import { FC, ReactNode } from 'react';

export const Button: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return (
		<button className="cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-3 py-1 text-sm md:px-4 md:py-2 md:text-base">
			{children}
		</button>
	);
};

export const LargeButton: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return (
		<button className="cursor-pointer rounded-full bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2 text-base md:px-5 md:py-3 md:text-lg">
			{children}
		</button>
	);
};
