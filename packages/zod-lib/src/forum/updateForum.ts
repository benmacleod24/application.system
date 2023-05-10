import { z } from "zod";
import { stringToNumber } from "../utils";

export const updateForumSchema = z.object({
	forumId: z.string(),
	forumTitle: z.ostring(),
	description: z.ostring(),
});
