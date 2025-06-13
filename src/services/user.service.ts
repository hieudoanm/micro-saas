import { prismaClient } from '@micro/prisma/prisma.client';
import { Password } from '@micro/utils/password';
import { tryCatch } from '@micro/utils/try-catch';

const changePassword = async ({
	email = '',
	oldPassword = '',
	newPassword = '',
}: {
	email: string;
	oldPassword: string;
	newPassword: string;
}) => {
	const { data: user, error: findError } = await tryCatch(
		prismaClient.user.findUnique({ select: { email: true, password: true }, where: { email } }),
	);
	if (findError) throw new Error(findError.message);
	if (!user) throw new Error('Invalid Email or Password');
	const { password: oldHash } = user;
	const verified: boolean = await Password(oldPassword).verify(oldHash);
	if (!verified) throw new Error('Invalid Email or Password');
	const newHash = await Password(newPassword).hash();
	const { data: updatedUser, error: updateError } = await tryCatch(
		prismaClient.user.update({ data: { password: newHash }, where: { email } }),
	);
	if (updateError) throw new Error(updateError.message);
	if (!updatedUser) throw new Error('Invalid Email or Password');
	return { success: true };
};

export const UserService = () => {
	return { changePassword };
};
