import { privateProcedure } from '@micro/server/router';
import { UserService } from '@micro/services/user.service';
import { tryCatch } from '@micro/utils/try-catch';
import { z } from 'zod';

export const changePassword = privateProcedure
	.input(z.object({ email: z.string(), oldPassword: z.string(), newPassword: z.string() }))
	.mutation(async (options) => {
		const { email, oldPassword, newPassword } = options.input;
		const { data, error } = await tryCatch(UserService().changePassword({ email, oldPassword, newPassword }));
		if (error) {
			console.error(error.message);
			return { success: true };
		}
		return { success: data.success };
	});
