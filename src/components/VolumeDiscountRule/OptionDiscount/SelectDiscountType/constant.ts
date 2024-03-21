import { DiscountOptionEnum } from "@/enums/DiscountOption";

export const optionsSelectType = [
	{
		label: "None",
		value: DiscountOptionEnum.NONE,
	},
	{
		label: "% discount",
		value: DiscountOptionEnum.DISCOUNT,
	},
	{
		label: "Discount / each",
		value: DiscountOptionEnum.DISCOUNT_EACH,
	},
];
