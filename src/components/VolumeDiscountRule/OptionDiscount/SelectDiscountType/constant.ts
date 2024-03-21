export enum OptionEnum {
	NONE = "NONE",
	DISCOUNT = "DISCOUNT",
	DISCOUNT_EACH = "DISCOUNT_EACH",
}

export const optionsSelectType = [
	{
		label: "None",
		value: OptionEnum.NONE,
	},
	{
		label: "% discount",
		value: OptionEnum.DISCOUNT,
	},
	{
		label: "Discount / each",
		value: OptionEnum.DISCOUNT_EACH,
	},
];
