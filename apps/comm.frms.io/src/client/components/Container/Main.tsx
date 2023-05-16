import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Header from "../Header";

interface ContainerMainProps extends React.PropsWithChildren {}

/**
 * @description Main Wrapper for the container
 * @return {React.FC<ContainerMain>}
 */
const ContainerMain: React.FC<ContainerMainProps> = (props) => {
	return (
		<Flex
			w="full"
			h="full"
			bg="radial-gradient(112.85% 368.92% at 3.52% 9.49%, #1D1D21 0%, #0F0F12 100%)"
			pos="relative"
			pr="5"
		>
			<Flex
				pos="absolute"
				top="0"
				left="0"
				bg="radial-gradient(43.75% 136.63% at 6.77% 12.87%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.01) 100%)"
				backdropFilter={"blur(2.5px)"}
			/>
			<Header />
			<Flex p="5" w="calc(100% - 15%)">
				{props.children}
			</Flex>
		</Flex>
	);
};

export default ContainerMain;
