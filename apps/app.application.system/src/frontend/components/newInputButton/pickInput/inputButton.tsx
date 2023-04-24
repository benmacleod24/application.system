import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsInputCursorText } from "react-icons/bs";

interface InputButtonProps {
	text: string;
	icon?: any;
}

/**
 * @description
 * @return {React.FC<InputButton>}
 */
const InputButton: React.FC<InputButtonProps> = (props) => {
	return (
		<Flex
			bg="#111414"
			h="20"
			border="1px solid"
			borderColor="whiteAlpha.200"
			boxShadow={"base"}
			rounded={"md"}
			w="full"
			justify={"center"}
			align="center"
			gap={2}
			flexDir={"column"}
			transition={"0.1s ease-in-out"}
			_hover={{
				borderColor: "rgba(23,125,224,1)",
				color: "whiteAlpha.800",
			}}
		>
			<Icon fontSize="xl" as={props.icon} />
			<Text fontSize="sm">{props.text}</Text>
		</Flex>
	);
};

export default InputButton;
