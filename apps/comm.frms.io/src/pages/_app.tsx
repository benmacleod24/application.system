import { ChakraProvider } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/dist/shared/lib/utils";
import { theme } from "styles";
import { SWRConfig } from "swr";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ClerkProvider {...pageProps}>
			<SWRConfig
				value={{
					refreshInterval: 3000,
					fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
				}}
			>
				<ChakraProvider resetCSS theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</SWRConfig>
		</ClerkProvider>
	);
};

export default MyApp;
