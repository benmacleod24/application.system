import { Flex, Grid, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import InputButton from "./inputButton";

// Icons
import { HiOutlinePlusSm } from "react-icons/hi";
import {
	BsInputCursorText,
	BsQuestionLg,
	BsTextParagraph,
} from "react-icons/bs";
import { BiSelectMultiple } from "react-icons/bi";
import { TbBoxMultiple3 } from "react-icons/tb";
import { FaBalanceScaleLeft } from "react-icons/fa";

interface PickInputProps {}

/**
 * @description Container for each input button.
 * @return {React.FC<PickInput>}
 */
const PickInput: React.FC<PickInputProps> = (props) => {
	return (
		<Flex flexDir="column" gap={2}>
			<Text color="whiteAlpha.700" fontWeight={"noormal"}>
				<Text
					as="span"
					bgClip={"text"}
					fontWeight={"black"}
					bgGradient={
						"linear-gradient(73deg, rgba(23,125,224,1) 0%, rgba(93,175,255,1) 100%);"
					}
				>
					Step One:
				</Text>{" "}
				Pick An Input?
			</Text>
			<Grid templateColumns={"repeat(3, 1fr)"} w="full" gap={3}>
				<InputButton text="Short Input" icon={BsInputCursorText} />
				<InputButton text="Paragraph" icon={BsTextParagraph} />
				<InputButton text="Checkboxes" icon={BiSelectMultiple} />
				<InputButton text="Multiple Choice" icon={TbBoxMultiple3} />
				<InputButton
					text="On The Scale Of..."
					icon={FaBalanceScaleLeft}
				/>
				<InputButton text="Need One Added?" icon={BsQuestionLg} />
			</Grid>
		</Flex>
	);
};

export default PickInput;
