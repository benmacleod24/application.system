import { Flex, Icon, Image, Text, TextProps } from "@chakra-ui/react";

interface LogoProps {
	size?: TextProps["fontSize"];
}

/**
 * @description Logo Component
 */
const Logo = (props: LogoProps) => {
	return (
		<Flex fontWeight={"extrabold"} fontSize={props.size || "28"} align={"center"}>
			<Image
				src="https://cdn.discordapp.com/attachments/1100546469838209024/1107542543584985128/Background_Icon_Idea.svg"
				w="8"
				h="8"
				mr="4"
			/>
			<Text>frms</Text>
			<Text color="brand.700">.io</Text>
		</Flex>
	);
};

export default Logo;
