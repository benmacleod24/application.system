import { useRouter } from "next/router";

export const useCommunity = () => {
	const { query } = useRouter();
	const communityId = query.uniqueCommunityId;

	return { communityId };
};
