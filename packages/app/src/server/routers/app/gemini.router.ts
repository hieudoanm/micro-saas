import { GeminiModel, generateContent } from '@micro/clients/api/gemini.client';
import { publicProcedure } from '@micro/server/router';
import { tryCatch } from '@micro/utils/try-catch';
import { z } from 'zod';

export const gemini = {
	generate: publicProcedure
		.input(z.object({ prompt: z.string() }))
		.mutation(async (options) => {
			const { prompt } = options.input;
			const { data, error } = await tryCatch(
				generateContent({ model: GeminiModel.Gemini_2_0_Flash, prompt }),
			);
			if (error) {
				console.error(error);
				return null;
			}
			console.info('data', data);
			return data;
		}),
};
