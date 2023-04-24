import { Flex, Icon } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import PickInput from "./pickInput";

interface NewInputButtonProps {}

/**
 * @description Componenet to handle new input selection.
 * @return {React.FC<NewInputButton>}
 */
const NewInputButton: React.FC<NewInputButtonProps> = (props) => {
	const [isUsing, setIsUsing] = useState<boolean>(false);

	return (
		<Flex
			border={`${isUsing ? "none" : "dashed"} 2px`}
			rounded={"xl"}
			justify={"center"}
			align={isUsing ? "normal" : "center"}
			gap={2}
			onClick={() => setIsUsing(true)}
			color="whiteAlpha.400"
			borderColor="whiteAlpha.200"
			cursor={"pointer"}
			transition={"0.2s ease-in-out"}
			p="2"
			flexDir={"column"}
			_hover={
				isUsing
					? {}
					: {
							bg: "background.800",
							color: "#5dafff",
					  }
			}
		>
			{!isUsing && <Icon as={HiOutlinePlusSm} fontSize={"3xl"} />}
			{isUsing && <PickInput />}
		</Flex>
	);
};

export default NewInputButton;
