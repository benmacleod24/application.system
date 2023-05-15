import { Flex } from "@chakra-ui/react";
import { SignIn, SignInButton } from "@clerk/nextjs";
import { Community } from "database";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import { Response } from "types";
import Test from "~/test";

const Home: NextPage = () => {
	const { data } = useSWR<Response<Omit<Community, "updatedAt">[]>>("/api/v1/comm");
	return (
		<Flex>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</Flex>
	);
};

export default Home;
