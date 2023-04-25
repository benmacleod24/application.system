import { HiOutlinePlusSm } from "react-icons/hi";
import {
	BsInputCursorText,
	BsQuestionLg,
	BsTextParagraph,
} from "react-icons/bs";
import { BiSelectMultiple } from "react-icons/bi";
import { TbBoxMultiple3 } from "react-icons/tb";
import { FaBalanceScaleLeft } from "react-icons/fa";

export const inputOptions: { type: string; text: string; icon: any }[] = [
	{
		icon: BsInputCursorText,
		type: "short_input",
		text: "Short Input",
	},
	{
		icon: BsTextParagraph,
		type: "long_input",
		text: "Paragraph",
	},
	{
		type: "checkboxes",
		text: "Checkboxes",
		icon: BiSelectMultiple,
	},
	{
		type: "multi_choice",
		text: "Multiple Choice",
		icon: TbBoxMultiple3,
	},
	{
		type: "scale",
		text: "On The Scale Of...",
		icon: FaBalanceScaleLeft,
	},
	{
		type: "add_one",
		text: "Need One Added?",
		icon: BsQuestionLg,
	},
];
