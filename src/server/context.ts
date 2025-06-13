import { JWT } from '@micro/utils/jwt';
import { CreateNextContextOptions, NextApiRequest, NextApiResponse } from '@trpc/server/adapters/next';
import { cookies } from 'next/headers';

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
	const cookieStore = await cookies();
	const authToken = cookieStore.get('auth-token')?.value;
	if (!authToken) return { req, res, email: null };
	const { email } = JWT().verify(authToken);
	return { req, res, email };
};

export type Context = { req: NextApiRequest; res: NextApiResponse; email: string | null };
