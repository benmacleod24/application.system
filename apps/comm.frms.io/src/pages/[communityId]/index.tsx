import { Button, Container, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Modal from "ui-components/src/Modal";
import ContainerMain from "~/client/components/Container/Main";
import StatWrapper from "~/client/components/Stat";

interface CommunityDashboardProps {}

/**
 * @description Community Dashboard Component
 * @return {React.FC<CommunityDashboard>}
 */
const CommunityDashboard: React.FC<CommunityDashboardProps> = (props) => {
	return (
		<ContainerMain>
			<Grid templateColumns={"repeat(5, 1fr)"} h="fit-content" gap={5} w="full" mt="5">
				<StatWrapper title="New Submissions" timeFormat="Past 24 Hours" value="23" />
				<StatWrapper title="Unhandled Submissions" timeFormat="All Time" value="32" />
				<StatWrapper title="Accepted Submissions" timeFormat="Past 24 Hours" value="8" />
				<StatWrapper title="Denied Submissions" timeFormat="Past 24 Hours" value="5" />
				<StatWrapper title="Submissions" timeFormat="All Time" value="347" />
			</Grid>
		</ContainerMain>
	);
};

export default CommunityDashboard;
