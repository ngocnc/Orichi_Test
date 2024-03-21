/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "@shopify/polaris";
import { FC, useCallback } from "react";
import { ValueForm, ValueInputProps } from "../../../../context/FormContext";
import { useFormContext } from "../../../../hooks/useFormContext";
import { optionsSelectType } from "./constant";

type SelectDiscountTypeProps = {
	label: string;
	form: ValueInputProps;
	indexValue: number;
};

const SelectDiscountType: FC<SelectDiscountTypeProps> = ({
	label,
	form,
	indexValue,
}) => {
	const { handleChangeRuleForm, register } = useFormContext();

	const handleChange = useCallback(
		(value: string) => {
			handleChangeRuleForm(value, "discountType", indexValue);
		},
		[handleChangeRuleForm, indexValue]
	);

	const key = `rule[${indexValue}].discountType` as keyof ValueForm;

	return (
		<Select
			{...(register(key) as any)}
			label={label}
			options={optionsSelectType}
			onChange={handleChange}
			value={form.discountType}
		/>
	);
};

export default SelectDiscountType;
