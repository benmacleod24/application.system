import { Button, Container } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Branding } from "ui-components";

const Home: NextPage = () => {
	return (
		<Container p="10">
			<Branding.Logo />
			<Button variant={"brand"}>Get Started</Button>
			<Button variant={"simple"}>Login</Button>
		</Container>
	);
};

export default Home;
