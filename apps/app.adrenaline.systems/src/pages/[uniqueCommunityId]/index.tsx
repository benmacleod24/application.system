import React, { useState, useEffect } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { buildClerkProps, clerkClient, getAuth } from "@clerk/nextjs/server";

import Application from "@/frontend/components/Application";
import { useApplication } from "@/frontend/hooks/useApplication";
import { useCommunity } from "@/frontend/hooks/useCommunity";
import { useUser } from "@clerk/nextjs";
import { applicationClientQuery } from "zod-lib";
import { getQuestionsForAppId } from "@/backend/helpers/getQuestionsForAppId";
import { useRouter } from "next/router";
import { doesAppIdExist } from "@/backend/helpers/doesAppIdExist";

interface ApplicationPageProps {
	questions: Awaited<typeof getQuestionsForAppId>;
}

/**
 * @description Application page.
 * @return {React.FC<ApplicationPage>}
 */
const ApplicationPage: React.FC<ApplicationPageProps> = (props) => {
	const { communityId } = useCommunity();
	const { user } = useUser();
	const { query } = useRouter();

	// Check if the community exist, not just string.
	if (!communityId || !query.appId) {
		return (
			<Application.Container>
				<Application.Error>
					We could not find an application with that ID. Please try again or contact us
					for help.
				</Application.Error>
			</Application.Container>
		);
	}

	return (
		<Application.Container>
			<Application.Header username={user!.username as string} />
			<Application.Body>
				<pre>{JSON.stringify(props.questions, null, 3)}</pre>
			</Application.Body>
		</Application.Container>
	);
};

export default ApplicationPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { userId } = getAuth(ctx.req);
	const { appId, view } = applicationClientQuery.parse(ctx.query);

	let props: any = {};

	// User must be logged in to access this page.
	if (!userId) {
		return {
			props,
			redirect: {
				destination: `/?redirect=http://${ctx.req.headers.host}${ctx.req.url}`,
				permanent: true,
			},
		};
	}

	// The application much exist in our database, to acces this page.
	if (!appId || !(await doesAppIdExist(appId))) {
		return {
			props,
			redirect: { destination: "/" },
		};
	}

	// If they are requesting the editor, make sure they can access it.
	if (view === "editor") {
		// If they are requesting editor access, check if they can.
		const user = await clerkClient.users.getUser(userId);

		// @todo Check for view editor access

		return {
			props: { ...props, ...buildClerkProps(ctx.req, { user }) },
		};
	}

	// Collect questions on the server side.
	const questions = await getQuestionsForAppId(appId);
	props = { ...props, questions };

	return { props: props };
};
