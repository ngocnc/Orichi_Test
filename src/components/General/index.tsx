import { FormLayout } from "@shopify/polaris";
import { Fragment } from "react";

import { useFormContext } from "@/hooks/useFormContext";
import { ValueForm } from "@/types/Form";
import InputField from "../InputField";
import { inputFields } from "./constant";

type KeyOfValueForm = keyof Omit<ValueForm, "rule">;
type KeyofErrors = keyof Omit<ValueForm, "rule">;

const GeneralForm = () => {
	const { register, errors } = useFormContext();

	return (
		<FormLayout>
			{inputFields.map((input) => {
				return (
					<Fragment key={input.name}>
						<InputField
							{...input}
							{...register(input.name! as KeyOfValueForm)}
						/>
						{errors[input.name! as KeyofErrors] && (
							<p className="error-message">
								{errors[input.name! as KeyofErrors]?.message}
							</p>
						)}
					</Fragment>
				);
			})}
		</FormLayout>
	);
};

export default GeneralForm;
