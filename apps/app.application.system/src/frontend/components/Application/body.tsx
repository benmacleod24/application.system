import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface AppBodyProps {}

/**
 * @description Body container for the application.
 * @return {React.FC<AppBody>}
 */
const AppBody: React.FC<React.PropsWithChildren<AppBodyProps>> = (props) => {
	return (
		<Flex w="full" px="8" py="5" flexDir={"column"} gap={5}>
			{props.children}
		</Flex>
	);
};

export default AppBody;
