import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TbArrowsMoveVertical } from "react-icons/tb";

interface CommunitySwitcherProps {}

/**
 * @description Community Switcher Component
 * @return {React.FC<CommunitySwitcher>}
 */
const CommunitySwitcher: React.FC<CommunitySwitcherProps> = (props) => {
	return (
		<Flex
			align={"center"}
			gap={2}
			w="fit-content"
			rounded={"lg"}
			transition={"0.2s ease-in-out"}
			cursor={"pointer"}
			py="2"
			_hover={{
				bg: "whiteAlpha.200",
				px: "2",
			}}
		>
			<Box
				w="7"
				h="7"
				bg="url(https://cdn.discordapp.com/icons/960175002198622308/4eeb0a096aea58f706f851a8073f31a7.webp?size=96)"
				bgSize="cover"
				bgRepeat={"no-repeat"}
				bgPos={"center"}
				border={"1px solid rgba(255, 255, 255, 0.1)"}
				rounded={"lg"}
				overflow={"hidden"}
			/>
			<Text
				mr="2"
				fontWeight={"semibold"}
				bg={
					"linear-gradient(91.36deg, rgba(255, 255, 255, 0.81) 0.08%, rgba(255, 255, 255, 0.79) 99.85%);"
				}
				bgClip={"text"}
			>
				Infinite Roleplay
			</Text>
			<Icon fontSize={"lg"} as={TbArrowsMoveVertical} />
		</Flex>
	);
};

export default CommunitySwitcher;
