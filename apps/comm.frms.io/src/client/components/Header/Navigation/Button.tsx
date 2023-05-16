import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

interface NavButtonProps extends React.PropsWithChildren {
	buttonProps: ButtonProps;
	url?: string;
}

/**
 * @description Nav Button Component
 * @return {React.FC<NavButton>}
 */
const NavButton: React.FC<NavButtonProps> = (props) => {
	if (props.url !== undefined)
		return (
			<Link href={props.url}>
				<Button
					variant={"simple"}
					w="fit-content"
					fontWeight={"medium"}
					color={useRouter().pathname.endsWith(props.url) ? "white" : "whiteAlpha.400"}
					{...props.buttonProps}
					pl="0"
				>
					{props.children}
				</Button>
			</Link>
		);

	return (
		<Button
			variant={"simple"}
			w="fit-content"
			fontWeight={"medium"}
			color={"whiteAlpha.400"}
			{...props.buttonProps}
			pl="0"
		>
			{props.children}
		</Button>
	);
};

export default NavButton;
