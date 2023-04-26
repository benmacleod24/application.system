import { PrismaClient } from "database";

export const doesAppIdExist = async (appId: string) => {
	try {
		const doesAppExist = await new PrismaClient().application.findUnique({
			where: {
				id: appId,
			},
		});

		if (doesAppExist && doesAppExist.id === appId) {
			return true;
		}

		return false;
	} catch (e) {
		console.log(e);
		throw e;
	}
};
