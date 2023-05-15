import { FormControl, FormLabel, Textarea as TextAreaComp } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface TextareamProps {
	title: string;
}

/**
 * @description Textarea Input for the Form
 * @return {React.FC<Textaream>}
 */
const Textarea: React.FC<TextareamProps> = (props: TextareamProps) => {
	return (
		<FormControl>
			<FormLabel fontWeight={"medium"} color="#DBDBDB">
				{props.title}
			</FormLabel>
			<TextAreaComp
				variant={"filled"}
				_focusVisible={{ outline: "none" }}
				border="1px solid"
				borderColor={"#3E3E3E"}
			/>
		</FormControl>
	);
};

export default Textarea;
