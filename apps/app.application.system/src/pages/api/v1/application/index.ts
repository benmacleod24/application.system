import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "database";
import z from "zod";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "POST":
			return POST(req, res);
		default:
			throw new Error("Method does not exist at this endpoint.");
	}
};

const newApplicationBodyRequest = z.object({
	title: z.string(),
	communityId: z.number(),
});

/**
 * @method POST
 * @url /api/v1/application
 * @description Create a new application.
 */
const POST = async (req: NextApiRequest, res: NextApiResponse) => {
	const { communityId, title } = newApplicationBodyRequest.parse(req.body);

	if (!communityId || !title) {
		return;
	}

	// Scrub title for correct content.
	//

	// Create new record in the database.
	const newAppRecord = await prisma.application.create({
		data: {
			title,
			communityId,
		},
	});

	// Application did not create, return failed request.
	if (!newAppRecord || !newAppRecord.id) {
		res.status(500).json({
			status: "500",
			message: "An error occured while create a new application.",
		});
		return;
	}

	res.status(200).json({
		status: "200",
		message: " Created new application successfully.",
		data: newAppRecord,
	});
	return;
};

export default handler;
