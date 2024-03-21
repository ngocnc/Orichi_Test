import { z } from "zod";
import { OptionEnum } from "../../components/VolumeDiscountRule/OptionDiscount/SelectDiscountType/constant";

export const volumeDiscountSchema = z.object({
	campaignName: z.string().min(1, "Campaign name is required"),
	title: z.string().optional(),
	description: z.string().optional(),
	rule: z.array(
		z
			.object({
				titleOption: z.string().min(1, "Title is required"),
				subtitle: z.string().optional(),
				label: z.string().optional(),
				quantity: z.number().min(1, "Quantity is required"),
				discountType: z.nativeEnum(OptionEnum),
				amount: z.number().optional(),
			})
			.refine(
				(obj) => obj.discountType === "NONE" || obj.amount !== undefined,
				{
					message: "Vui lòng nhập amount khi discountType khác NONE",
					path: ["amount"],
				}
			)
	),
});

export type TypeVolumeDiscountSchema = z.infer<typeof volumeDiscountSchema>;
