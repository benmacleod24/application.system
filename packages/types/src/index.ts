export type APIResponse<T = unknown> = {
	status: string;
	message: string;
	data?: T;
};

export * from "./applicationForm";
