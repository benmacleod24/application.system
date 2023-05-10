import { z } from "zod";
import { updateForumSchema } from "zod-lib";
import { PrismaClient, prisma } from "database";

export const updateForum = async (data: z.infer<typeof updateForumSchema>) => {
	const { forumId, ...rest } = data;

	if (!forumId) return;

	try {
		const updatedForum = await (prisma as PrismaClient).forum.update({
			where: {
				forumId: forumId,
			},
			data: rest,
		});

		return updatedForum;
	} catch (e) {
		throw e;
	}
};
