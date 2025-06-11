import { FC, ReactNode } from 'react';

export const Button: FC<{ children: ReactNode }> = ({ children = <></> }) => {
	return (
		<button className="cursor-pointer rounded-lg bg-gradient-to-r from-red-800 via-purple-800 to-blue-800 px-4 py-2">
			{children}
		</button>
	);
};
