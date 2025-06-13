import { router } from '../router';
import { changePassword } from './app/user.router';
import { forget, reset } from './auth/password.router';
import { signIn, signUp } from './auth/user.router';

export const appRouter = router({
	auth: {
		user: { signIn, signUp },
		password: { forget, reset },
	},
	app: {
		user: { password: { change: changePassword } },
	},
});

// export type definition of API
export type AppRouter = typeof appRouter;
