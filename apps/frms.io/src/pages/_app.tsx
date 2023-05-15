import { ChakraProvider } from "@chakra-ui/react";
import { type AppType } from "next/dist/shared/lib/utils";
import theme from "styles";

// Stripe
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51N6gmWDsjYmq776bD0pbrF2lSqHwcxIfTsSPcxKuCAjLMLq067CAcv5bXbpMvyM3wVhVzaQLOvk8WCrCu0WBHKQu00lm4wah2j"
);

const MyApp: AppType = ({ Component, pageProps }) => {
	const options = {
		// passing the client secret obtained from the server
		clientSecret:
			"sk_test_51N6gmWDsjYmq776bpiKbz8NWVWjDp1wS038KfpntRlsEo08nkeeKtjHVqFB2K7I2Yavk1dmeudYrixVLVsqBr6s600o1diJ5mN",
	};

	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
