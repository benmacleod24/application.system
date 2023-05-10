import { ChakraProvider } from "@chakra-ui/react";
import { type AppType } from "next/dist/shared/lib/utils";
import theme from "styles";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
