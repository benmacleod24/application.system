import { z } from "zod";

export const questionIdQuery = z.object({
	questionId: z.ostring().transform((v) => Number(v)),
});

export const updateQuestionRequest = z.object({
	type: z.ostring(),
	title: z.ostring(),
});

export const newQuestionRequestBody = z.object({
	title: z.string(),
	type: z.string(),
});
