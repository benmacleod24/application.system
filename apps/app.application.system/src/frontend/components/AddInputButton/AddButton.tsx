import React, { useState, useEffect } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Flex, Icon } from "@chakra-ui/react";

interface AddButtonProps {
	toggle: () => void;
}

/**
 * @description Add button for the application.
 * @return {React.FC<AddButton>}
 */
const AddButton: React.FC<AddButtonProps> = (props) => {
	return (
		<Flex
			p="2"
			gap="2"
			minH="32"
			rounded="xl"
			align="center"
			cursor="pointer"
			flexDir="column"
			justify="center"
			border="dashed 2px"
			color="whiteAlpha.400"
			borderColor="whiteAlpha.200"
			_hover={{
				bg: "background.800",
				color: "#5dafff",
			}}
			onClick={props.toggle}
		>
			<Icon as={HiOutlinePlusSm} fontSize={"3xl"} />
		</Flex>
	);
};

export default AddButton;
