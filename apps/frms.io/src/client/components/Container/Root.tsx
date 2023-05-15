import { Container, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Header from "../Header";

interface RootContainerProps extends React.PropsWithChildren {}

/**
 * @description Root Container for each page.
 * @return {React.FC<RootContainer>}
 */
const RootContainer: React.FC<RootContainerProps> = (props) => {
	return (
		<Flex w="full" flexDir={"column"} align={"center"}>
			<Header />
			<Flex boxSizing="border-box" maxW="container.xl" h="10" w="full">
				{props.children}
			</Flex>
		</Flex>
	);
};

export default RootContainer;
