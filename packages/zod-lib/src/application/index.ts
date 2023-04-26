import { z } from "zod";

export const appIdQuery = z.object({
	applicationId: z.string(),
});

export const applicationClientQuery = z.object({
	uniqueCommunityId: z.ostring(),
	view: z.ostring(),
	appId: z.ostring(),
});
