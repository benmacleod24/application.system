import { Flex } from "@chakra-ui/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface ApplicationContainerProps {}

/**
 * @description Container for the application.
 * @return {React.FC<ApplicationContainer>}
 */
const ApplicationContainer: React.FC<React.PropsWithChildren<ApplicationContainerProps>> = (
	props
) => {
	const [parent] = useAutoAnimate();

	return (
		<Flex
			p="5"
			my="10"
			mx="auto"
			h="fit-content"
			rounded="3xl"
			flexDir="column"
			w="container.md"
			overflow="hidden"
			border="2px solid"
			bg="background.700"
			borderColor="whiteAlpha.200"
			ref={parent}
		>
			{props.children}
		</Flex>
	);
};

export default ApplicationContainer;
