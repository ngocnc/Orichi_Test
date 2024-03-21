/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, createContext, useCallback, useState } from "react";
import {
	FieldArrayWithId,
	FieldErrors,
	UseFieldArrayAppend,
	UseFieldArrayRemove,
	UseFieldArrayUpdate,
	UseFormGetValues,
	UseFormSetValue,
	useFieldArray,
	useForm,
} from "react-hook-form";

import { DiscountOptionEnum } from "@/enums/DiscountOption";
import {
	TypeVolumeDiscountSchema,
	volumeDiscountSchema,
} from "@/lib/validators/volumeDiscount";
import { postVolumeDiscount } from "@/services/VolumeDiscountService";
import { Frame, Toast } from "@shopify/polaris";

interface FormProps {
	handleSubmitForm: (data: TypeVolumeDiscountSchema) => Promise<void>;
	register: any;
	errors: FieldErrors<TypeVolumeDiscountSchema>;
	isSubmitting: boolean;
	fields: TypeField[];
	append: TypeAppend;
	remove: UseFieldArrayRemove;
	update: UseFieldArrayUpdate<TypeVolumeDiscountSchema, "rule">;
	getValues: UseFormGetValues<TypeVolumeDiscountSchema>;
	setValue: UseFormSetValue<TypeVolumeDiscountSchema>;
}
export const FormContext = createContext({} as FormProps);

export type TypeField = FieldArrayWithId<
	TypeVolumeDiscountSchema,
	"rule",
	"id"
>;

export type TypeAppend = UseFieldArrayAppend<TypeVolumeDiscountSchema, "rule">;

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
			discountType: DiscountOptionEnum.NONE,
			amount: undefined,
		},
		{
			titleOption: "Duo",
			subtitle: "Save 10%",
			label: "Popular",
			quantity: 2,
			discountType: DiscountOptionEnum.DISCOUNT,
			amount: 10,
		},
	],
};

const FormProvider = ({ children }: PropsWithChildren) => {
	const [showToast, setShowToast] = useState<{ value: string; show: boolean }>({
		value: "",
		show: false,
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		control,
		getValues,
		setValue,
		reset,
	} = useForm<TypeVolumeDiscountSchema>({
		resolver: zodResolver(volumeDiscountSchema),
		defaultValues: initialValue,
	});

	const { fields, append, remove, update } = useFieldArray({
		control,
		name: "rule",
	});

	const toggleActive = useCallback(
		(value?: string) =>
			setShowToast((active) => ({
				...active,
				show: !active.show,
				...(value && { value }),
			})),
		[]
	);

	const handleSubmitForm = async (data: TypeVolumeDiscountSchema) => {
		try {
			await postVolumeDiscount(data);
			toggleActive("Discount created successfully");
			reset();
		} catch (error) {
			console.log("handleSubmitForm ~ error:", error);
			toggleActive("Discount creation failed");
		}
	};

	return (
		<FormContext.Provider
			value={{
				handleSubmitForm,
				register,
				errors,
				isSubmitting,
				fields,
				append,
				remove,
				update,
				getValues,
				setValue,
			}}>
			<Frame>
				<form action="" onSubmit={handleSubmit(handleSubmitForm)}>
					{children}
				</form>
				{showToast.show ? (
					<Toast content={showToast.value} onDismiss={toggleActive} />
				) : null}
			</Frame>
		</FormContext.Provider>
	);
};

export default FormProvider;
