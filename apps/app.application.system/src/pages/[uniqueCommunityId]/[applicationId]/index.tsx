import {
	Button,
	Container,
	Divider,
	Flex,
	Grid,
	Icon,
	Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsInputCursorText } from "react-icons/bs";
import { BiSelectMultiple } from "react-icons/bi";
import { TbBoxMultiple3 } from "react-icons/tb";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import NewInputButton from "@/frontend/components/newInputButton";

interface ApplicationHomeProps {}

/**
 * @description Root page for all applications actions.
 * @return {React.FC<ApplicationHome>}
 */
const ApplicationHome: React.FC<ApplicationHomeProps> = (props) => {
	const { isSignedIn, user } = useUser();

	const discordExternalAccount =
		isSignedIn &&
		user.externalAccounts.find((a) => a.provider === "discord");

	if (!discordExternalAccount) return null;

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
				{/* Header */}
				<Flex w="full" py="5" px="8" flexDir={"column"}>
					{/* Welcome Text. */}
					<Flex flexDir={"column"} gap={2}>
						<Text
							fontSize="3xl"
							fontWeight={"bold"}
							lineHeight={"none"}
						>
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
							Let's make your new_
						</Text>
						<Text
							fontSize="3xl"
							fontWeight={"bold"}
							lineHeight={"none"}
						>
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
						To get started all you have to do is click the box
						below and it will ask what kind of input you want to
						create. Then select the one you want and fill out the
						information.
					</Text>
				</Flex>
				<Flex w="full" px="8" py="5" flexDir={"column"}>
					<NewInputButton />
				</Flex>
			</Flex>
		</Container>
	);
};

export default ApplicationHome;
