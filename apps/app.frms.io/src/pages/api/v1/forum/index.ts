import { NextApiRequest, NextApiResponse } from "next";
import { updateForumSchema } from "zod-lib";
import { updateForum } from "~/server/db/updateForum";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "PUT":
			return PUT(req, res);
		default:
			throw new Error("Method does not exist at this endpoint.");
	}
};

/**
 * @method PUT
 * @url /api/v1/forum
 * @description Update the forum via it's id.
 */
const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = updateForumSchema.parse(JSON.parse(req.body));

	if (!data) {
		return res.status(400).json("no data");
	}

	const updatedForum = await updateForum(data);

	if (updatedForum && updatedForum.forumId != data.forumId) {
		return res.status(500).json("error on server.");
	}

	return res.status(200).json(updatedForum);
};

export default handler;
