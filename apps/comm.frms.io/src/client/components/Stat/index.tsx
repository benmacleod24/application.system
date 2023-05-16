import { Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface StatWrapperProps {
	title?: string;
	timeFormat?: string;
	value?: string;
}

/**
 * @description Stat Wrapper
 * @return {React.FC<StatWrapper>}
 */
const StatWrapper: React.FC<StatWrapperProps> = (props) => {
	return (
		<Flex
			w="full"
			bg="radial-gradient(216.62% 653.5% at -121.43% -117.58%, rgba(255, 255, 255, 0.012) 0%, rgba(18, 18, 21, 0.468) 100%)"
			border="1.5px solid"
			borderColor={"whiteAlpha.200"}
			h="fit-content"
			rounded={"lg"}
			boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.1);"}
			p="4"
			backdropFilter={"blue(2px)"}
			flexDir={"column"}
		>
			<Text fontWeight={"bold"}>{props.title}</Text>
			<Text fontSize={"sm"} color="whiteAlpha.500">
				{props.timeFormat}
			</Text>
			<Text
				fontSize={"2xl"}
				mt="3"
				fontWeight={"black"}
				bg="linear-gradient(122.5deg, #FF9684 -17.66%, #FF6449 100%);"
				bgClip={"text"}
			>
				{props.value}
			</Text>
		</Flex>
	);
};

export default StatWrapper;
