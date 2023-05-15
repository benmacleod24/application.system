import { Button, Container, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Branding } from "ui-components";

interface HeaderProps {}

/**
 * @description Header Component
 * @return {React.FC<Header>}
 */
const Header: React.FC<HeaderProps> = (props) => {
	return (
		<Flex w="full" minH="20">
			<Container maxW="container.xl" display={"flex"} alignContent={"center"}>
				<Flex w="20%" h="full" align="center">
					<Branding.Logo />
				</Flex>
				<Flex w="55%" h="full" align={"center"}>
					<Button variant={"simple"}>Pricing</Button>
					<Button variant={"simple"}>Contact Us</Button>
					<Button variant={"simple"}>Discord</Button>
				</Flex>
				<Flex w="25%" h="full" align={"center"} gap={4} justify={"flex-end"}>
					<Button variant={"simple"}>Login</Button>
					<Button variant={"brand"} size="sm" py="5" px="4">
						Get Started
					</Button>
				</Flex>
			</Container>
		</Flex>
	);
};

export default Header;
