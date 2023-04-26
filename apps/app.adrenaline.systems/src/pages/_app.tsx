import theme from "styles";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ClerkProvider {...pageProps}>
			<SWRConfig
				value={{
					refreshInterval: 3000,
					fetcher: (resource, init) =>
						fetch(resource, init).then((res) => res.json()),
				}}
			>
				<RecoilRoot>
					<ChakraProvider resetCSS theme={theme}>
						<Component {...pageProps} />
					</ChakraProvider>
				</RecoilRoot>
			</SWRConfig>
		</ClerkProvider>
	);
}
