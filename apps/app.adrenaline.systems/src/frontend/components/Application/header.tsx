import { Flex, Text } from "@chakra-ui/react";
import { SignInButton, useUser } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";

interface HeaderProps {}

/**
 * @description Application header title and information.
 * @return {React.FC<Header>}
 */
const Header: React.FC<HeaderProps> = (props) => {
	const { isSignedIn, user } = useUser();

	const discordExternalAccount =
		isSignedIn &&
		user.externalAccounts.find((a) => a.provider === "discord");

	if (!discordExternalAccount) return <SignInButton />;

	return (
		<Flex w="full" py="5" px="8" flexDir={"column"}>
			{/* Welcome Text. */}
			<Flex flexDir={"column"} gap={2}>
				<Text fontSize="3xl" fontWeight={"bold"} lineHeight={"none"}>
					Alight {discordExternalAccount.username},
				</Text>
				<Text
					fontSize="3xl"
					fontWeight={"black"}
					lineHeight={"9"}
					bgClip={"text"}
					bgGradient={
						"linear-gradient(73deg, rgba(93,175,255,1) 0%, rgba(23,125,224,1) 100%);"
					}
				>
					Let's make a new_
				</Text>
				<Text fontSize="3xl" fontWeight={"bold"} lineHeight={"none"}>
					Application for{" "}
					<Text
						as={"span"}
						bgClip={"text"}
						fontWeight={"black"}
						bgGradient={
							"linear-gradient(73deg, rgba(23,125,224,1) 0%, rgba(93,175,255,1) 100%);"
						}
					>
						Test Community
					</Text>
					.
				</Text>
			</Flex>

			{/* Info Text */}
			<Text color="whiteAlpha.600" mt="8">
				To get started all you have to do is click the box below and it
				will ask what kind of input you want to create. Then select the
				one you want and fill out the information.
			</Text>
		</Flex>
	);
};

export default Header;
