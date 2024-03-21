/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, createContext, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { OptionEnum } from "../components/VolumeDiscountRule/OptionDiscount/SelectDiscountType/constant";
import {
	TypeVolumeDiscountSchema,
	volumeDiscountSchema,
} from "../lib/validators/volumeDiscount";

interface FormProps {
	valueForms: ValueForm;
	handleChangeRuleForm: (value: string, name: string, index: number) => void;
	handleRemoveRuleForm: (index: number) => void;
	handleAddRuleForm: () => void;
	handleChangeNotRuleForm: (value: string, name: string) => void;

	handleSubmitForm: (data: TypeVolumeDiscountSchema) => Promise<void>;
	register: any;
	errors: FieldErrors<TypeVolumeDiscountSchema>;
	isSubmitting: boolean;
}
export const FormContext = createContext({} as FormProps);

export type ValueInputProps = {
	titleOption: string;
	subtitle: string;
	label: string;
	quantity?: number;
	amount?: number;
	discountType: OptionEnum;
};

export type ValueForm = {
	campaignName: string;
	title: string;
	description: string;
	rule: ValueInputProps[];
};

const FormProvider = ({ children }: PropsWithChildren) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TypeVolumeDiscountSchema>({
		resolver: zodResolver(volumeDiscountSchema),
	});

	const initialValue = {
		campaignName: "",
		title: "",
		description: "",
		rule: [
			{
				titleOption: "Single",
				subtitle: "Standard Price",
				label: "",
				quantity: 1,
				discountType: OptionEnum.NONE,
				amount: undefined,
			},
			{
				titleOption: "Duo",
				subtitle: "Save 10%",
				label: "Popular",
				quantity: 2,
				discountType: OptionEnum.DISCOUNT,
				amount: 10,
			},
		],
	};

	const [valueForms, setValueForms] = useState<ValueForm>(initialValue);
	console.log("FormProvider ~ valueForms:", errors);

	const handleChangeRuleForm = (value: string, name: string, index: number) => {
		setValueForms((prev) => {
			const { rule, ...rest } = prev;
			const newState = [...rule];
			newState[index] = { ...newState[index], [name]: value };
			return { ...rest, rule: newState };
		});
	};

	const handleRemoveRuleForm = (index: number) => {
		setValueForms((prev) => {
			const { rule, ...rest } = prev;
			const newState = [...rule];
			newState.splice(index, 1);
			return { ...rest, rule: newState };
		});
	};

	const handleAddRuleForm = () => {
		setValueForms((prev) => {
			const { rule, ...rest } = prev;
			const newState = [...rule];

			newState.push({
				titleOption: "",
				subtitle: "",
				label: "",
				quantity: newState.length + 1,
				discountType: OptionEnum.NONE,
				amount: undefined,
			});
			return { ...rest, rule: newState };
		});
	};

	const handleChangeNotRuleForm = (value: string, name: string) => {
		setValueForms((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleSubmitForm = async (data: TypeVolumeDiscountSchema) => {
		console.log("handleSubmitForm ~ data:", data);
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<FormContext.Provider
			value={{
				valueForms,
				handleChangeRuleForm,
				handleRemoveRuleForm,
				handleAddRuleForm,
				handleChangeNotRuleForm,

				handleSubmitForm,
				register,
				errors,
				isSubmitting,
			}}>
			<form action="" onSubmit={handleSubmit(handleSubmitForm)}>
				{children}
			</form>
		</FormContext.Provider>
	);
};

export default FormProvider;
