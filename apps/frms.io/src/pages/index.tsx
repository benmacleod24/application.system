import { Button, Container } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<Container p="10">
			<Button variant={"brand"}>Get Started</Button>
			<Button variant={"simple"}>Login</Button>
		</Container>
	);
};

export default Home;
