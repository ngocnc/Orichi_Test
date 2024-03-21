import { DataTable, LegacyCard } from "@shopify/polaris";
import { FC } from "react";

import { DiscountOptionEnum } from "@/enums/DiscountOption";
import { useFormContext } from "@/hooks/useFormContext";

const TablePreview: FC = () => {
	const { getValues } = useFormContext();

	const rows = getValues("rule").map((value) => {
		const { titleOption, discountType, quantity, amount } = value;
		return [
			titleOption,
			discountType,
			quantity,
			amount &&
				`${amount}${
					value.discountType === DiscountOptionEnum.DISCOUNT ? "%" : "$"
				}`,
		];
	});

	return (
		<LegacyCard>
			<DataTable
				columnContentTypes={["text", "numeric", "numeric", "numeric"]}
				headings={["Title", "Discount Type", "Quantity", "Amount"]}
				rows={rows}
			/>
		</LegacyCard>
	);
};

export default TablePreview;
