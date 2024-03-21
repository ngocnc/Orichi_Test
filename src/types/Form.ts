import { DiscountOptionEnum } from "@/enums/DiscountOption";

export type ValueInputProps = {
	titleOption: string;
	subtitle: string;
	label: string;
	quantity?: number;
	amount?: number;
	discountType: DiscountOptionEnum;
};

export type ValueForm = {
	campaignName: string;
	title: string;
	description: string;
	rule: ValueInputProps[];
};
