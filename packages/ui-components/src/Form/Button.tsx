import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

interface ForumButtonProps extends React.PropsWithChildren {}

/**
 * @description Forum Submit Button
 * @return {React.FC<ForumButton>}
 */
const ForumButton: React.FC<ForumButtonProps> = (props) => {
	return (
		<Button variant={"brand"} type="submit" w="full">
			{props.children}
		</Button>
	);
};

export default ForumButton;
