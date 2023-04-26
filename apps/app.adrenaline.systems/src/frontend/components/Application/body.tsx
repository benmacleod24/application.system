import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface AppBodyProps {
	gap?: number;
}

/**
 * @description Body container for the application.
 * @return {React.FC<AppBody>}
 */
const AppBody: React.FC<React.PropsWithChildren<AppBodyProps>> = (props) => {
	return (
		<Flex w="full" px="8" py="5" flexDir={"column"} gap={props.gap || 5}>
			{props.children}
		</Flex>
	);
};

export default AppBody;
