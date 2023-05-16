import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { Response as ResponseType } from "types";
import { z } from "zod";
import { Prisma, PrismaClient, prisma } from "database";
import { Response, config, stringToNumber } from "utils";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "GET":
			return GET(req, res);
		case "POST":
			return POST(req, res);
		default:
			throw new Error("Method does not exist at this endpoint.");
	}
};

/**
 * @method GET
 * @url /api/v1/comm
 * @description Get all communities.
 */

const getQuerySchema = z.object({
	page: z.ostring().transform(stringToNumber),
	limit: z.ostring().transform(stringToNumber),
});

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { limit, page } = getQuerySchema.parse(req.query);

		const communities = await (prisma as PrismaClient).community.findMany({
			take: limit || config.PAGINATION.PER_PAGE_LIMIT,
			select: {
				communityId: true,
				communityName: true,
				createdAt: true,
			},
			skip:
				page !== undefined
					? ((page || 1) - 1) * (limit || config.PAGINATION.PER_PAGE_LIMIT)
					: 0,
		});

		res.status(200).json(
			Response.build(200, {
				data: communities,
				message: "Successfully collect communities.",
			})
		);
	} catch (e: any) {
		res.status(500).json(
			Response.error(500, {
				eCode: e.code,
				message: e.message,
			})
		);
	}
};

/**
 * @method POST
 * @url /api/v1/comm
 * @description Create a new community.
 */

const postBodySchema = z.object({
	communityName: z.string().nonempty("You must provide a community name."),
});

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
	const user = getAuth(req);

	// Check that the request is made by a logged in person.
	if (!user || !user.userId) {
		res.status(400).json(
			Response.build(400, {
				error: {
					eCode: "UA001",
				},
				message: "Could not find correct authentication details.",
			})
		);
		return;
	}

	try {
		// Parse Community Data.
		const { communityName } = postBodySchema.parse(JSON.parse(req.body));

		// Create new community in the database with prisma.
		const newCommunity = await (prisma as PrismaClient).community.create({
			data: {
				communityName,
				members: {
					create: {
						memberId: user.userId as string,
					},
				},
			},
		});

		res.status(200).json(
			Response.build(200, {
				data: newCommunity,
				message: "Successfully created new community!",
			})
		);
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
