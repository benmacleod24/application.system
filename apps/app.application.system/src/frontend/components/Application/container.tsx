import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface ApplicationContainerProps {}

/**
 * @description Container for the application.
 * @return {React.FC<ApplicationContainer>}
 */
const ApplicationContainer: React.FC<
	React.PropsWithChildren<ApplicationContainerProps>
> = (props) => {
	return (
		<Flex
			p="5"
			mx="auto"
			rounded="3xl"
			flexDir="column"
			w="container.md"
			overflow="hidden"
			border="2px solid"
			bg="background.700"
			borderColor="whiteAlpha.200"
		>
			{props.children}
		</Flex>
	);
};

export default ApplicationContainer;
