import React, { useState, useEffect } from "react";
import {
	Button,
	Flex,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { Form } from "../Form";

interface CreateCommunityProps {}

/**
 * @description Create community modal.
 * @return {React.FC<CreateCommunity>}
 */
const CreateCommunity: React.FC<CreateCommunityProps> = (props) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen}>New Community</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay backdropFilter={"blur(1px)"} />
				<ModalContent bg="none" p="0">
					<ModalBody
						as={Flex}
						bg="background.800"
						borderRadius={"lg"}
						overflow={"hidden"}
						// p="8"
						py="4"
						pb="7"
						border="1px solid"
						borderColor={"#3E3E3E"}
						w="lg"
					>
						<Flex w="full" h="full" flexDir={"column"}>
							<Flex>
								<Text fontSize={"lg"} fontWeight={"bold"} color="#E1E1E1" mb="5">
									Create Community
								</Text>
							</Flex>
							<Flex flexDir={"column"} gap={1} mb="5">
								<Text fontWeight={"medium"} color="#DBDBDB">
									Community name
								</Text>
								<Input
									variant={"filled"}
									border="1px solid"
									borderColor={"#3E3E3E"}
									_focusVisible={{ outline: "none" }}
									placeholder="What are you thinking?"
								/>
							</Flex>
							<Form.Input
								title="Unique Community Code"
								help="We use this to help identify your community unique to the public."
								inputProps={{
									placeholder: "e.x. FRMSIO, E2QR4B, ...",
								}}
							/>
							<Flex mt="8">
								<Form.Button>Create Community</Form.Button>
							</Flex>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreateCommunity;
