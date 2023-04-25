import { Flex, Grid, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import InputButton from "./inputButton";
import { inputOptions } from "../../../../config";

interface PickInputProps {}

/**
 * @description Container for each input button.
 * @return {React.FC<PickInput>}
 */
const PickInput: React.FC<PickInputProps> = (props) => {
	return (
		<Flex flexDir="column" gap={2}>
			<Text color="whiteAlpha.700" fontWeight={"noormal"}>
				<Text
					as="span"
					bgClip={"text"}
					fontWeight={"black"}
					bgGradient={
						"linear-gradient(73deg, rgba(23,125,224,1) 0%, rgba(93,175,255,1) 100%);"
					}
				>
					Step One:
				</Text>{" "}
				Pick An Input?
			</Text>
			<Grid templateColumns={"repeat(3, 1fr)"} w="full" gap={3}>
				{inputOptions.map((i, index) => (
					<InputButton
						key={index}
						text={i.text}
						icon={i.icon}
						type={i.type}
					/>
				))}
			</Grid>
		</Flex>
	);
};

export default PickInput;
