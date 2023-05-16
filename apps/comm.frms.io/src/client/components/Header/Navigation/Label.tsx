import { Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface NavLabelProps extends React.PropsWithChildren {}

/**
 * @description Nav Label Component
 * @return {React.FC<NavLabel>}
 */
const NavLabel: React.FC<NavLabelProps> = (props) => {
	return (
		<Text
			bg="linear-gradient(105.03deg, rgba(255, 255, 255, 0.39) 22.93%, rgba(255, 255, 255, 0.52) 100%);"
			bgClip="text"
			textTransform={"uppercase"}
			fontWeight={"semibold"}
			fontSize={"xs"}
		>
			{props.children}
		</Text>
	);
};

export default NavLabel;
