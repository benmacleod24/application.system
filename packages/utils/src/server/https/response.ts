import { ResponseBuildOptions, ResponseErrorOptions, Response as ResponseType } from "types";

export class Response {
	/**
	 * Generate a response object that meets the type of Response, to keep API
	 * responses consistent.
	 */
	public static build = (code: number, opts?: ResponseBuildOptions) => {
		return {
			payload: opts.data || undefined,
			meta: {
				code: code.toString(),
				message: opts.message || "",
			},
			error: opts.error || undefined,
		} satisfies ResponseType;
	};

	/**
	 * Generate a response object that meets the type of Response, to keep API
	 * responses consistent.
	 */
	public static error = (code: number, opts?: ResponseErrorOptions) => {
		return {
			meta: {
				code: code.toString(),
				message: opts.message || "",
			},
			error: {
				eCode: opts.eCode || "0000",
				message: opts.message || "",
			},
		} satisfies ResponseType;
	};
}
