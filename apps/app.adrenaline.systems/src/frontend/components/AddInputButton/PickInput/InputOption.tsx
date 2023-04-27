import { Flex, FlexProps, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { InputOption } from "types";

interface InputOptionProps {
	option: InputOption;
}

/**
 * @description Input options for input picker.
 * @return {React.FC<InputOption>}
 */
const InputOption: React.FC<InputOptionProps> = (props) => {
	const { query } = useRouter();
	// Hover props here
	const onHover: FlexProps["_hover"] = {
		borderColor: "brand.700",
		color: "white",
	};

	const onClick = async () => {
		await fetch(`/api/v1/${query.unqiueCommunityId}/${query.appId}/questions`, {
			method: "POST",
			body: JSON.stringify({
				title: "",
				type: props.option.type,
			}),
		});
	};

	return (
		<Flex
			w="full"
			bg="background.600"
			h="20"
			justify={"center"}
			align="center"
			flexDir={"column"}
			border="1px solid"
			borderColor="whiteAlpha.200"
			rounded="lg"
			cursor="pointer"
			gap={2}
			transition={"0.15s ease-in-out"}
			color="whiteAlpha.600"
			_hover={onHover}
			onClick={onClick}
		>
			<Icon fontSize="xl" as={props.option.icon} />
			<Text fontSize="sm">{props.option.text}</Text>
		</Flex>
	);
};

export default InputOption;
