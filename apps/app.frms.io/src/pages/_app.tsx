import { ChakraProvider } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/dist/shared/lib/utils";
import { theme } from "styles";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ClerkProvider {...pageProps}>
			<ChakraProvider theme={theme} resetCSS>
				<Component {...pageProps} />
			</ChakraProvider>
		</ClerkProvider>
	);
};

export default MyApp;
