import { publicProcedure } from '@micro/server/router';
import { AuthService } from '@micro/services/auth.service';
import { tryCatch } from '@micro/utils/try-catch';
import { serialize } from 'cookie'; // built-in cookie serialization helper
import { NextApiResponse } from 'next';
import z from 'zod';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const MAX_AGE = 60 * 60 * 24; // 1 day

const setHttpCookie = (res: NextApiResponse, token: string) => {
	const cookie = serialize('auth-token', token, {
		httpOnly: true,
		secure: NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
		maxAge: MAX_AGE,
	});
	res.setHeader('Set-Cookie', cookie);
};

export const signIn = publicProcedure
	.input(z.object({ email: z.string(), password: z.string() }))
	.mutation(async (options) => {
		const { res } = options.ctx;
		const { email, password } = options.input;
		const { data, error } = await tryCatch(AuthService().user({ email, password }).signIn());
		if (error) {
			console.error(error.message);
			return { success: false };
		}
		const { success, token } = data;
		setHttpCookie(res, token);
		return { success };
	});

export const signUp = publicProcedure
	.input(z.object({ email: z.string(), password: z.string() }))
	.mutation(async (options) => {
		const { email, password } = options.input;
		const { data, error } = await tryCatch(AuthService().user({ email, password }).signUp());
		if (error) {
			console.error(error.message);
			return { success: false };
		}
		return { success: data.success };
	});
