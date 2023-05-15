import { Stripe } from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { getProducts } from "~/server/db/products/get-products";
import { getStripe } from "~/server/utils/get-stripe";
import { buffer } from "micro";

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	switch (method) {
		case "POST":
			return POST(req, res);
		default:
			throw new Error("Method does not exist at this endpoint.");
	}
};

/**
 * @method POST
 * @url /api/v1/ecomm/products
 * @description Get all products.
 */
const POST = async (req: NextApiRequest, res: NextApiResponse) => {
	const sig = req.headers["stripe-signature"];
	const buf = await buffer(req);
	let event: Stripe.Event;

	try {
		event = getStripe().webhooks.constructEvent(buf, sig as string, env.STRIPE_WEBHOOK_KEY);
	} catch (err) {
		throw err;
	}

	console.log(event);
	console.log("Event");
	return res.json({ received: true });
};

export default handler;
