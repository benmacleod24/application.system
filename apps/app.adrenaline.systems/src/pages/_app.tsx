import theme from "styles";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ClerkProvider {...pageProps}>
			<RecoilRoot>
				<ChakraProvider resetCSS theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</RecoilRoot>
		</ClerkProvider>
	);
}
