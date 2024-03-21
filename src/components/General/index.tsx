import { FormLayout, TextField } from "@shopify/polaris";
import { ChangeEvent, FC, Fragment } from "react";
import { ValueForm } from "../../context/FormContext";
import { useFormContext } from "../../hooks/useFormContext";
import { inputFields } from "./constant";

type Test = keyof Omit<ValueForm, "rule">;

const GeneralForm: FC = () => {
	const { register, errors, handleChangeNotRuleForm, valueForms } =
		useFormContext();

	return (
		<FormLayout>
			{inputFields.map((input) => {
				return (
					<Fragment key={input.name}>
						<TextField
							{...input}
							{...register(input.name! as Test)}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeNotRuleForm(e.target.value, input.name!)
							}
							value={valueForms[input.name! as keyof ValueForm]}
						/>
						{errors[input.name! as keyof typeof errors] && (
							<p>{errors[input.name! as keyof typeof errors]?.message}</p>
						)}
					</Fragment>
				);
			})}
		</FormLayout>
	);
};

export default GeneralForm;
