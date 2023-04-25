import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import Container from "./Container";
import { useBoolean } from "@chakra-ui/react";

interface AddInputButtonProps {}

/**
 * @description Add input button.
 * @return {React.FC<AddInputButton>}
 */
const AddInputButton: React.FC<AddInputButtonProps> = (props) => {
	// Hold the state if they are adding a input option.
	const [isUsing, setUsing] = useBoolean();

	if (!isUsing) {
		return <AddButton toggle={setUsing.toggle} />;
	}

	return <Container></Container>;
};

export default AddInputButton;
