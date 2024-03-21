import { TextFieldProps } from "@shopify/polaris";

import { DiscountOptionEnum } from "@/enums/DiscountOption";

export enum ComponentEnum {
	input = "input",
	select = "select",
}

export type OptionDiscountProps = TextFieldProps & {
	component: ComponentEnum;
};

export const optionsInput = (
	selected: DiscountOptionEnum
): OptionDiscountProps[] => {
	const commonOptions: OptionDiscountProps[] = [
		{
			name: "titleOption",
			label: "Title",
			type: "text",
			placeholder: "Enter title",
			autoComplete: "off",
			component: ComponentEnum.input,
		},
		{
			name: "subtitle",
			label: "Subtitle",
			type: "text",
			placeholder: "Enter subtitle",
			autoComplete: "off",
			component: ComponentEnum.input,
		},
		{
			name: "label",
			label: "Label (optional)",
			type: "text",
			placeholder: "Enter label",
			autoComplete: "off",
			component: ComponentEnum.input,
		},
		{
			name: "quantity",
			label: "Quantity",
			type: "text",
			placeholder: "Enter quantity",
			autoComplete: "off",
			component: ComponentEnum.input,
		},
		{
			name: "discountType",
			label: "Discount Type",
			type: "text",
			placeholder: "Enter title",
			autoComplete: "off",
			component: ComponentEnum.select,
		},
	];

	if (selected !== DiscountOptionEnum.NONE) {
		return [
			...commonOptions,
			{
				name: "amount",
				label: "Amount",
				type: "text",
				placeholder: "Enter amount",
				autoComplete: "off",
				component: ComponentEnum.input,
			},
		];
	}

	return commonOptions;
};
