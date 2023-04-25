export type ApplicationValues<D = unknown> = {
	questions: PreDBQuestion<D>[];
};

export type PreDBQuestion<D = unknown> = {
	type: string;
	questionData?: D;
	title?: string;
};

export type InputOption = {
	type: string;
	text: string;
	icon?: any;
};
