import { atom } from "recoil";
import { ApplicationValues } from "types";

const initValues: ApplicationValues = {
	questions: [],
};

// Current application, that is being read or edited.
export const appData = atom<ApplicationValues<any>>({
	key: "appData",
	default: initValues,
});

// Determines weather they are adding a new component.
export const isAdding = atom<boolean>({
	key: "isAdding",
	default: false,
});
