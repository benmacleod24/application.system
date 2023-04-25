"use client";

import { Flex, Icon } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import PickInput from "./pickInput";
import { useField } from "formik";
import { PreDBQuestion } from "types";
import { isAdding as isAddingAtom } from "../../state/application";
import { useRecoilState } from "recoil";

interface NewInputButtonProps {}

/**
 * @description Componenet to handle new input selection.
 * @return {React.FC<NewInputButton>}
 */
const NewInputButton: React.FC<NewInputButtonProps> = (props) => {
	const [isAdding, _setter] = useRecoilState(isAddingAtom);

	return (
		<Flex
			p="2"
			gap={2}
			minH="32"
			rounded={"xl"}
			cursor={"pointer"}
			flexDir={"column"}
			justify={"center"}
			color="whiteAlpha.400"
			borderColor="whiteAlpha.200"
			align={isAdding ? "normal" : "center"}
			border={`${isAdding ? "none" : "dashed"} 2px`}
			_hover={{
				bg: isAdding ? "transparent" : "background.800",
				color: "#5dafff",
			}}
			onClick={() => {
				if (isAdding) return;
				_setter(true);
			}}
		>
			{isAdding && <PickInput />}
			{!isAdding && <Icon as={HiOutlinePlusSm} fontSize={"3xl"} />}
		</Flex>
	);
};

export default NewInputButton;
