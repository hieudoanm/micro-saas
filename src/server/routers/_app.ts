import { router } from '../router';
import { user } from './app/user.router';
import { authPassword } from './auth/password.router';
import { authUser } from './auth/user.router';

export const appRouter = router({
	auth: { user: authUser, password: authPassword },
	app: { user },
});

// export type definition of API
export type AppRouter = typeof appRouter;
