import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Branding } from "ui-components";
import { Nav } from "./Navigation";
import { BiHome, BiSliderAlt, BiHelpCircle, BiLogOut } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import CommunitySwitcher from "ui-components/src/CommunitySwitcher";

interface HeaderProps {}

/**
 * @description Header Component
 * @return {React.FC<Header>}
 */
const Header: React.FC<HeaderProps> = (props) => {
	return (
		<Flex maxW="15%" minW="15%" h="100vh" flexDir={"column"} pl="10">
			<Flex w="full" h="28">
				<Branding.Logo />
			</Flex>
			<Flex flexDir={"column"} mb="10">
				<Nav.Label>Community</Nav.Label>
				<CommunitySwitcher />
			</Flex>
			<Flex flexDir={"column"} mb="10">
				<Nav.Label>Menu</Nav.Label>
				<Nav.Button url="" buttonProps={{ leftIcon: <Icon as={BiHome} fontSize={"xl"} /> }}>
					Dashboard
				</Nav.Button>
				<Nav.Button
					url="/submissions"
					buttonProps={{ leftIcon: <Icon as={IoNewspaperOutline} fontSize={"xl"} /> }}
				>
					Submissions
				</Nav.Button>
				<Nav.Button
					url="/forms"
					buttonProps={{ leftIcon: <Icon as={BsStack} fontSize={"xl"} /> }}
				>
					Forms
				</Nav.Button>
				<Nav.Button
					url="/settings"
					buttonProps={{ leftIcon: <Icon as={BiSliderAlt} fontSize={"xl"} /> }}
				>
					Community Settings
				</Nav.Button>
			</Flex>

			<Flex flexDir={"column"}>
				<Nav.Label>Others</Nav.Label>
			</Flex>
		</Flex>
	);
};

export default Header;
