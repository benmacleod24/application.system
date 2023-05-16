import { PrismaClient, prisma } from "database";
import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "utils";
import { z } from "zod";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "GET":
			return GET(req, res);
		default:
			throw new Error("Method does not exist at this endpoint.");
	}
};

/**
 * @method GET
 * @url /api/v1/comm/[communityId]
 * @description Get a community by their ID.
 */

const getQueryParams = z.object({
	communityId: z.string(),
	includeMembers: z.ostring().transform((v) => (v === "true" ? true : false)),
});

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
	const { communityId, includeMembers } = getQueryParams.parse(req.query);

	// No community id to use for the database look up.
	if (!communityId) {
		res.status(400).json(
			Response.error(400, {
				message: "Could not find a community ID to look up with.",
			})
		);
		return;
	}

	try {
		// Find the community in the database/
		const community = await (prisma as PrismaClient).community.findUnique({
			where: {
				communityId,
			},
			include: {
				members: includeMembers,
			},
		});

		res.status(200).json(
			Response.build(200, {
				data: community,
				message: `Successfully collected community with ID ${communityId}`,
			})
		);
		return;
	} catch (e: any) {
		res.status(500).json(
			Response.error(500, {
				eCode: e.code,
				message: e.message,
			})
		);
	}
};

export default handler;
