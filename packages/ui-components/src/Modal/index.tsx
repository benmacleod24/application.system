import React, { useState, useEffect, useRef } from "react";
import { Modal as ModalComp, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";

interface ModalProps extends React.PropsWithChildren {
	isOpen: boolean;
	onClose: () => void;
}

/**
 * @description Modal Wrapper Component
 * @return {React.FC<Modal>}
 */
const Modal: React.FC<ModalProps> = ({ onClose, isOpen, ...props }) => {
	const ref = useRef();
	return (
		<ModalComp onClose={onClose} isOpen={isOpen} initialFocusRef={ref as any}>
			<ModalOverlay backdropFilter={"blur(2px)"} />
			<ModalContent
				ref={ref as any}
				boxSizing="border-box"
				p="5"
				border="1.5px solid"
				borderColor={"whiteAlpha.200"}
				rounded={"2xl"}
				bg="radial-gradient(112.85% 368.92% at 3.52% 9.49%, #1D1D21 0%, #0F0F12 100%)"
			>
				{props.children}
			</ModalContent>
		</ModalComp>
	);
};

export default Modal;
