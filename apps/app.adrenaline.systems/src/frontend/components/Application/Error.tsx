import React, { useState, useEffect } from "react";
import AppBody from "./body";
import { Text } from "@chakra-ui/react";

interface AppErrorProps {}

/**
 * @description Error with the application.
 * @todo Redirect to the previous URL.
 * @return {React.FC<AppError>}
 */
const AppError: React.FC<React.PropsWithChildren<AppErrorProps>> = (props) => {
	return (
		<AppBody gap={1}>
			<Text fontSize="3xl" fontWeight={"bold"}>
				<Text
					as="span"
					bgClip={"text"}
					bgGradient={
						"linear-gradient(73deg, rgba(93,175,255,1) 0%, rgba(23,125,224,1) 100%);"
					}
				>
					Whoa!
				</Text>{" "}
				We ran into an error.
			</Text>
			<Text color="whiteAlpha.600">{props.children}</Text>
		</AppBody>
	);
};

export default AppError;
