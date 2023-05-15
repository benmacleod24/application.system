import { getStripe } from "../../utils/get-stripe";

export const getProducts = async () => {
	const stripe = getStripe();

	return await stripe.products.list();
};
