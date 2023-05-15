import {
	FormControl,
	FormLabel,
	Input as InputComp,
	InputProps as IP,
	Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface InputProps {
	title: string;
	help?: string;
	inputProps?: IP;
}

/**
 * @description Form Input Component
 * @return {React.FC<Input>}
 */
const Input: React.FC<InputProps> = (props: InputProps) => {
	return (
		<FormControl>
			<FormLabel>{props.title}</FormLabel>
			<InputComp
				variant={"filled"}
				border="1px solid"
				borderColor={"#3E3E3E"}
				_focusVisible={{ outline: "none" }}
				{...props.inputProps}
			/>
			{props.help && (
				<Text
					color="whiteAlpha.400"
					fontSize={"sm"}
					fontWeight={"normal"}
					fontStyle={"italic"}
				>
					{props.help}
				</Text>
			)}
		</FormControl>
	);
};

export default Input;
