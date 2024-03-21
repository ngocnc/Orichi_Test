import { Grid, Icon } from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import { FC } from "react";
import { ValueInputProps } from "../../../context/FormContext";
import { useFormContext } from "../../../hooks/useFormContext";
import InputField from "./InputField";
import SelectDiscountType from "./SelectDiscountType";
import { ComponentEnum, OptionDiscountProps, optionsInput } from "./constant";

type Props = {
	form: ValueInputProps;
	indexValue: number;
};

const OptionDiscount: FC<Props> = ({ form, indexValue }) => {
	const { handleRemoveRuleForm } = useFormContext();

	const renderComponents = (props: OptionDiscountProps) => {
		return {
			[ComponentEnum.input]: (
				<InputField inputProps={props} form={form} indexValue={indexValue} />
			),
			[ComponentEnum.select]: (
				<SelectDiscountType
					label={props.label! as string}
					form={form}
					indexValue={indexValue}
				/>
			),
		};
	};

	return (
		<div className="container-volume">
			<p className="custom-icon">
				<span onClick={() => handleRemoveRuleForm(indexValue)}>
					<Icon source={DeleteIcon} tone="base" />
				</span>
			</p>

			<Grid>
				{optionsInput(form.discountType!).map((input) => (
					<Grid.Cell
						columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}
						key={input.name}>
						{
							renderComponents(input)[
								input.component as keyof typeof renderComponents
							]
						}
					</Grid.Cell>
				))}
			</Grid>

			<div className="tag-volume">Option {indexValue + 1}</div>
		</div>
	);
};

export default OptionDiscount;
