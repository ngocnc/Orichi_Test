import { Box } from "@shopify/polaris";
import { ChangeEvent, forwardRef } from "react";

import InputField from "@/components/InputField";
import { TypeField } from "@/contexts/FormContext";
import { DiscountOptionEnum } from "@/enums/DiscountOption";
import { useFormContext } from "@/hooks/useFormContext";
import { ValueInputProps } from "@/types/Form";
import { DeepMap, FieldError } from "react-hook-form";
import { OptionDiscountProps } from "../constant";

type Props = {
	inputProps: OptionDiscountProps;
	form: TypeField;
	indexValue: number;
};

type KeyOfValueInputProps = keyof ValueInputProps;

type TypeError = DeepMap<ValueInputProps, FieldError>;

const InputOptionField = forwardRef<HTMLDivElement, Props>(
	({ inputProps, form, indexValue }, ref) => {
		const { name, ...rest } = inputProps;
		const { errors, register, setValue, fields } = useFormContext();

		const checkedShowIcon = name === "amount";
		const renderIcon =
			form.discountType === DiscountOptionEnum.DISCOUNT ? "%" : "$";

		const handleInputChange = (
			e: ChangeEvent<HTMLInputElement>,
			index: number
		) => {
			const newValue =
				name === "quantity" || name === "amount"
					? e.target.valueAsNumber
					: e.target.value;

			const updatedFields = fields.map((field, i) =>
				i === index ? { ...field, [name!]: newValue } : field
			);

			setValue("rule", updatedFields);
		};

		return (
			<Box position="relative" ref={ref}>
				<InputField
					{...register(
						`rule[${indexValue}].[${name!}]` as KeyOfValueInputProps,
						{
							valueAsNumber:
								name === "amount" || name === "quantity" ? true : false,
						}
					)}
					{...rest}
					onChange={(e) => handleInputChange(e, indexValue)}
					type={name === "quantity" || name === "amount" ? "number" : "text"}
				/>
				{checkedShowIcon && (
					<div
						style={{ position: "absolute", top: 30, right: 30, zIndex: 200 }}>
						{renderIcon}
					</div>
				)}
				{errors.rule?.[indexValue]?.[name as keyof TypeError] && (
					<div className="error-message">
						{errors.rule[indexValue]?.[name as keyof TypeError]?.message}
					</div>
				)}
			</Box>
		);
	}
);

export default InputOptionField;
