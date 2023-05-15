export type ResponseError = {
	// eCode will be the codes we assign to internal errors.
	eCode?: string;
	message?: string;
};

export type Response<T = unknown> = {
	payload?: T;
	error?: ResponseError;
	meta: {
		// https status code sent for the request.
		code: string;
		message?: string;
	};
};

export type ResponseBuildOptions = {
	message?: Response["meta"]["message"];
	data?: any;
	error?: ResponseErrorOptions;
};

export type ResponseErrorOptions = {
	eCode?: ResponseError["eCode"];
	message?: ResponseError["message"];
};
