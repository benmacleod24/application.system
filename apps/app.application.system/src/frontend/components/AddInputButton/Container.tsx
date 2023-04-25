import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface ContainerProps {}

/**
 * @description Container for the add input button.
 * @return {React.FC<Container>}
 */
const Container: React.FC<React.PropsWithChildren<ContainerProps>> = (
	props
) => {
	return <Flex>{props.children}</Flex>;
};

export default Container;
