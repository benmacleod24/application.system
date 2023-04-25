import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsInputCursorText } from "react-icons/bs";
import { useField } from "formik";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { isAdding as isAddingAtom, appData } from "../../../state/application";
import { PreDBQuestion } from "types";

interface InputButtonProps {
	text: string;
	type: string;
	icon?: any;
}

/**
 * @description
 * @return {React.FC<InputButton>}
 */
const InputButton: React.FC<InputButtonProps> = (props) => {
	const [isAdding, _setter] = useRecoilState(isAddingAtom);
	const [app, _setterApp] = useRecoilState(appData);

	const handleClick = () => {
		_setter(false);
		_setterApp({
			...app,
			questions: [...app.questions, { type: props.type }],
		});
	};

	return (
		<Flex
			bg="#111414"
			h="20"
			border="1px solid"
			borderColor="whiteAlpha.200"
			boxShadow={"base"}
			rounded={"md"}
			w="full"
			justify={"center"}
			align="center"
			gap={2}
			flexDir={"column"}
			transition={"0.1s ease-in-out"}
			color="whiteAlpha.400"
			onClick={handleClick}
			_hover={{
				borderColor: "rgba(23,125,224,1)",
				color: "whiteAlpha.800",
			}}
		>
			<Icon fontSize="xl" as={props.icon} />
			<Text fontSize="sm">{props.text}</Text>
		</Flex>
	);
};

export default InputButton;
