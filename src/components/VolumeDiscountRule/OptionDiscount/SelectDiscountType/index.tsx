/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";

import { TypeField } from "@/contexts/FormContext";
import { DiscountOptionEnum } from "@/enums/DiscountOption";
import { useFormContext } from "@/hooks/useFormContext";
import { TypeVolumeDiscountSchema } from "@/lib/validators/volumeDiscount";
import { Select } from "@shopify/polaris";
import { optionsSelectType } from "./constant";

type SelectDiscountTypeProps = {
	label: string;
	form: TypeField;
	indexValue: number;
};

const SelectDiscountType = forwardRef<HTMLDivElement, SelectDiscountTypeProps>(
	({ label, form, indexValue }, ref) => {
		const { register, fields, setValue } = useFormContext();

		const key =
			`rule[${indexValue}].discountType` as keyof TypeVolumeDiscountSchema;

		const updateFieldValue = (index: number, newValue: DiscountOptionEnum) => {
			const updatedFields = fields.map((field, i) => {
				if (i === index) {
					return { ...field, discountType: newValue };
				}
				return field;
			});
			setValue(`rule`, updatedFields);
		};

		return (
			<Select
				{...register(key)}
				label={label}
				options={optionsSelectType}
				ref={ref}
				value={form.discountType}
				onChange={(value: DiscountOptionEnum) => {
					updateFieldValue(indexValue, value);
				}}
			/>
		);
	}
);

export default SelectDiscountType;
