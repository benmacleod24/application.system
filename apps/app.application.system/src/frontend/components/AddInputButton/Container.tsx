import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface ContainerProps {}

/**
 * @description Container for the add input button.
 * @return {React.FC<Container>}
 */
const Container: React.FC<React.PropsWithChildren<ContainerProps>> = (
	props
) => {
	return (
		<Flex rounded="lg" as={motion.div} layout>
			{props.children}
		</Flex>
	);
};

export default Container;
