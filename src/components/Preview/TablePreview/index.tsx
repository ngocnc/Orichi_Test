import { DataTable, LegacyCard } from "@shopify/polaris";
import { FC } from "react";
import { useFormContext } from "../../../hooks/useFormContext";

const TablePreview: FC = () => {
	const { valueForms } = useFormContext();

	const rows = valueForms.rule.map((value) => {
		const { title, discountType, quantity, amount } = value;
		return [title, discountType, quantity, amount && `${amount}%`];
	});

	return (
		<LegacyCard>
			<DataTable
				columnContentTypes={["text", "text", "numeric", "numeric"]}
				headings={["Title", "Discount Type", "Quantity", "Amount"]}
				rows={rows}
			/>
		</LegacyCard>
	);
};

export default TablePreview;
