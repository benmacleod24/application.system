import { Container, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NewInputButton from "@/frontend/components/newInputButton";
import Header from "@/frontend/components/header";
import { Formik, Form } from "formik";
import { PreDBQuestion } from "types";
import { appData } from "../../frontend/state/application";
import { useRecoilState } from "recoil";

interface ApplicationHomeProps {}

/**
 * @description Root page for all applications actions.
 * @return {React.FC<ApplicationHome>}
 */
const ApplicationHome: React.FC<ApplicationHomeProps> = (props) => {
	const [app] = useRecoilState(appData);

	return (
		<Container maxW="container.lg" pt="5">
			<Flex
				w="container.md"
				border="2px solid"
				borderColor={"whiteAlpha.200"}
				rounded={"3xl"}
				bg="background.700"
				mx="auto"
				overflow={"hidden"}
				p="5"
				flexDir={"column"}
			>
				<Header />
				{/* Body */}

				<Flex w="full" px="8" py="5" flexDir={"column"}>
					{app.questions.map((q) => (
						<Text>{q.type}</Text>
					))}
					<NewInputButton />
				</Flex>
			</Flex>
		</Container>
	);
};

export default ApplicationHome;
