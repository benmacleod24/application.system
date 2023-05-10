import { Flex, Text, TextProps } from "@chakra-ui/react";

interface LogoProps {
	size?: TextProps["fontSize"];
}

/**
 * @description Logo Component
 */
const Logo = (props: LogoProps) => {
	return (
		<Flex fontWeight={"extrabold"} fontSize={props.size || "28"}>
			<Text>frms</Text>
			<Text color="brand.700">.io</Text>
		</Flex>
	);
};

export default Logo;
