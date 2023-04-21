// Delete
// Update

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, prisma } from "database";
import { questionIdQuery, updateQuestionRequest } from "zod-lib";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "GET":
			return GET(req, res);
		case "DELETE":
			return DELETE(req, res);
		case "PATCH":
			return PATCH(req, res);
		default:
			throw new Error("Method does not exist at this endpoint.");
	}
};

/**
 * @method GET
 * @url /api/v1/application/#ID/question/#ID
 * @description Get a question via it's ID.
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
	const { questionId } = questionIdQuery.parse(req.query);

	if (!questionId) {
		res.status(404).json({
			status: "404",
			message: `Could not find question.`,
		});
		return;
	}

	const question = await new PrismaClient().application_Question.findUnique({
		where: {
			id: questionId,
		},
	});

	if (!question || !question.id) {
		res.status(500).json({
			status: "500",
			message: "Error occured while finding the question.",
			err: question,
		});
		return;
	}

	res.status(200).json({
		status: "200",
		message: "We found that question for you!",
		data: question,
	});
	return;
};

/**
 * @method DELETE
 * @url /api/v1/application/#ID/question/#ID
 * @description Delete a question
 */
const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
	const { questionId } = questionIdQuery.parse(req.query);

	if (!questionId) {
		res.status(404).json({
			status: "404",
			message: `Question is not found.`,
		});
		return;
	}

	// Delete the question in the database.
	const [deletedQuestion] = await prisma.$transaction([
		prisma.application_Question.delete({
			where: {
				id: questionId,
			},
		}),
	]);

	if (!deletedQuestion || !deletedQuestion.id) {
		res.status(500).json({
			status: "500",
			message: "Error occured while deleting the question.",
			err: deletedQuestion,
		});
		return;
	}

	res.status(200).json({
		status: "500",
		message: `Successfully deleted question #${questionId} from the application.`,
	});
	return;
};

/**
 * @method PATCH
 * @url /api/v1/application/#ID/question/#ID
 * @description Update a queston.
 */
const PATCH = async (req: NextApiRequest, res: NextApiResponse) => {
	const body = updateQuestionRequest.parse(req.body);

	// body 404 error here.
	// check individually against like !body.type || !body.title

	if (!body.type || !body.title || !req.query.questionId) {
		res.status(404).json({
			status: "404",
			message: `Could not find question to update.`,
		});
		return;
	}

	const [updateQuestion] = await new PrismaClient().$transaction([
		new PrismaClient().application_Question.update({
			data: {
				title: body.title,
				type: body.type,
			},
			where: {
				id: Number(req.query.questionId),
			},
		}),
	]);

	// 500 Here

	if (!updateQuestion || !updateQuestion.id) {
		res.status(500).json({
			status: "500",
			message: "Error occured while updating a new question.",
			err: updateQuestion,
		});
		return;
	}

	res.status(200).json({
		status: "200",
		message: "Successfully updated question!",
	});
	return;
};

export default handler;
