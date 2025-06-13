import { publicProcedure } from '@micro/server/router';
import { AuthService } from '@micro/services/auth.service';
import { tryCatch } from '@micro/utils/try-catch';
import z from 'zod';

export const forget = publicProcedure.input(z.object({ email: z.string() })).mutation(async (options) => {
	const { email } = options.input;
	const { data, error } = await tryCatch(AuthService().password().forget({ email }));
	if (error) {
		console.error(error.message);
		return { success: false };
	}
	return { success: data.success };
});

export const reset = publicProcedure
	.input(z.object({ token: z.string(), password: z.string() }))
	.mutation(async (options) => {
		const { token, password } = options.input;
		const { data, error } = await tryCatch(AuthService().password().reset({ token, password }));
		if (error) {
			console.error(error.message);
			return { success: false };
		}
		return { success: data.success };
	});
