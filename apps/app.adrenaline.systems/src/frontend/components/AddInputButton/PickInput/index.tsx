import { Flex, Grid, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaAdjust } from "react-icons/fa";
import InputOption from "./InputOption";
import { motion } from "framer-motion";

interface PickInputProps {}

/**
 * @description Pick button container for new inputs.
 * @return {React.FC<PickInput>}
 */
const PickInput: React.FC<PickInputProps> = (props) => {
	const buttonsPerRow = 3;

	return (
		<Flex flexDir="column" w="full" as={motion.div} layout>
			<Grid templateColumns={`repeat(${buttonsPerRow}, 1fr)`} gap={2}>
				<InputOption
					option={{
						icon: FaAdjust,
						text: "Short Input",
						type: "short_input",
					}}
				/>
				<InputOption
					option={{
						icon: FaAdjust,
						text: "Short Input",
						type: "short_input",
					}}
				/>
				<InputOption
					option={{
						icon: FaAdjust,
						text: "Short Input",
						type: "short_input",
					}}
				/>
				<InputOption
					option={{
						icon: FaAdjust,
						text: "Short Input",
						type: "short_input",
					}}
				/>
				<InputOption
					option={{
						icon: FaAdjust,
						text: "Short Input",
						type: "short_input",
					}}
				/>
			</Grid>
		</Flex>
	);
};

export default PickInput;
