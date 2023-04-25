import { Container, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Application from "@/frontend/components/Application";
import AddInputButton from "@/frontend/components/AddInputButton";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

interface ApplicationHomeProps {}

/**
 * @description Root page for all applications actions.
 * @return {React.FC<ApplicationHome>}
 */
const ApplicationHome: React.FC<ApplicationHomeProps> = (props) => {
	return (
		<Container maxW="container.lg" pt="5">
			<Application.Container>
				<Application.Header />
				<Application.Body>
					<AddInputButton />
				</Application.Body>
			</Application.Container>
		</Container>
	);
};

export default ApplicationHome;
