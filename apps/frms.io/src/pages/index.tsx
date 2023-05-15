import { Button, Container } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Branding } from "ui-components";
import CreateCommunity from "ui-components/src/CreateCommunity";

const Home: NextPage = () => {
	return (
		<Container p="10">
			<Branding.Logo />
			<CreateCommunity />
		</Container>
	);
};

export default Home;
