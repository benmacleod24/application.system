import { Stripe as StripeRoot } from "stripe";
import { env } from "~/env.mjs";

let Stripe: undefined | StripeRoot = undefined;

export const getStripe = () => {
	if (Stripe === undefined) {
		Stripe = new StripeRoot(env.STRIPE_SECRET_KEY, {
			apiVersion: "2022-11-15",
		});
	}

	return Stripe;
};
