import { Box, TextField as Input } from "@shopify/polaris";
import { FC } from "react";
import { ValueForm, ValueInputProps } from "../../../../context/FormContext";
import { useFormContext } from "../../../../hooks/useFormContext";
import { OptionEnum } from "../SelectDiscountType/constant";
import { OptionDiscountProps } from "../constant";

type Props = {
	inputProps: OptionDiscountProps;
	form: ValueInputProps;
	indexValue: number;
};

const InputField: FC<Props> = ({ inputProps, form, indexValue }) => {
	const { name, ...rest } = inputProps;
	const { handleChangeRuleForm, errors, register } = useFormContext();
	console.log("errors:", errors);

	const handleInputChange = (inputValue: string) => {
		handleChangeRuleForm(inputValue, name!, indexValue);
	};

	const checkedShowIcon = name === "amount";

	const renderIcon = form.discountType === OptionEnum.DISCOUNT ? "%" : "$";

	return (
		<Box position="relative">
			<Input
				{...register(`rule[${indexValue}].[${name!}]` as keyof ValueForm)}
				{...rest}
				value={form[name! as keyof typeof form] as string}
				onChange={handleInputChange}
			/>
			{checkedShowIcon ? (
				<div style={{ position: "absolute", top: 30, right: 30, zIndex: 200 }}>
					{renderIcon}
				</div>
			) : null}
			{errors[name! as keyof typeof errors] && (
				<div className="error-message">
					{errors[name! as keyof typeof errors]?.message}
				</div>
			)}
		</Box>
	);
};

export default InputField;
