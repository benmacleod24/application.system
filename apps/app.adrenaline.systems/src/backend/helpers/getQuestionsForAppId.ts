import { PrismaClient, prisma } from "database";

export const getQuestionsForAppId = async (appId: string) => {
	try {
		const questions = await new PrismaClient().application_Question.findMany({
			where: {
				applicationId: appId,
			},
		});

		return questions;
	} catch (e) {
		console.log(e);
		throw e;
	}
};
