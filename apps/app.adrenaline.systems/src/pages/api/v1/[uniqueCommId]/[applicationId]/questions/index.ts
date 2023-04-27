import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, prisma } from "database";
import { appIdQuery, newQuestionRequestBody } from "zod-lib";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "POST":
			return POST(req, res);
		case "GET":
			return GET(req, res);
		default:
			throw new Error("Method does not exist at this endpoint.");
	}
};

/**
 * @method POST
 * @url /api/v1/application/ID/question
 * @description Create a new question for a specific application.
 */
const POST = async (req: NextApiRequest, res: NextApiResponse) => {
	const body = newQuestionRequestBody.parse(JSON.parse(req.body));

	if (!body) {
		res.status(404).json({
			status: "404",
			message: `Missing body information for the question.`,
		});
		return;
	}

	// HERE
	// Scrub questions to ensure no illicit content is input

	const question = await prisma.application_Question.create({
		data: {
			applicationId: req.query.applicationId as string,
			title: body.title,
			type: body.type,
		},
	});

	// Question didn't create.
	if (!question || !question.id) {
		res.status(500).json({
			status: "500",
			message: "Error occured while creating a new question.",
			err: question,
		});
		return;
	}

	res.status(200).json({
		status: "200",
		message: `Successfully created new question for application ${req.query.applicationId}`,
		data: question,
	});
	return;
};

/**
 * @method GET
 * @url /api/v1/commId/appId/question
 * @description Get all of the applications for that application id.
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
	const { applicationId } = appIdQuery.parse(req.query);

	// Collect al questions linked to this application id.
	const questions = await new PrismaClient().application_Question.findMany({
		where: {
			applicationId,
		},
	});

	// Question didn't create.
	if (!questions) {
		res.status(500).json({
			status: "500",
			message: "Error occured while collecting the questions.",
			err: questions,
		});
		return;
	}

	res.status(200).json({
		status: "200",
		message: `Collected all the questions for application ${req.query.applicationId}`,
		data: questions,
	});
};

export default handler;
