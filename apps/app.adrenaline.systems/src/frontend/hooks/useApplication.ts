import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Application_Question } from "database";
import useSWR from "swr";
import { APIResponse } from "types";

// /EWQ233?view=editor&appId=lasd-d2w31dfsadw-23asd

/**
 * @todo Check if they are authorized to edit this.
 */
export const useApplication = () => {
	// State
	const [isEditor, setEditor] = useState(false);

	// Router
	const { query, push } = useRouter();
	const view = query.view;
	const appId = query.appId;
	const commId = query.uniqueCommunityId;

	// Event to run, when the query params update.
	useEffect(() => {}, [view, appId, commId]);

	const {
		data,
		isLoading: isQuestionsLoading,
		mutate,
	} = useSWR<APIResponse<Application_Question[]>>(`/api/v1/${commId}/${appId}/questions`);

	return {
		isEditor,
		questions: data?.data,
		mutateQuestions: mutate,
		isLoading: isQuestionsLoading,
		appId,
	};
};
