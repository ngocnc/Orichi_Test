import { Button, Divider } from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import { FC, Fragment } from "react";

import { DiscountOptionEnum } from "@/enums/DiscountOption";
import { useFormContext } from "@/hooks/useFormContext";
import OptionDiscount from "./OptionDiscount";

const VolumeDiscountRule: FC = () => {
	const { fields, append } = useFormContext();

	const handleAddRuleFormOption = () => {
		append({
			titleOption: "",
			subtitle: "",
			label: "",
			quantity: fields.length + 1,
			discountType: DiscountOptionEnum.NONE,
			amount: undefined,
		});
	};

	return (
		<div className="Polaris-LegacyCard">
			<div className="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
				<h3
					className="Polaris-Text--root Polaris-Text--headingSm"
					style={{ paddingBottom: "10px" }}>
					Volume discount rule
				</h3>
			</div>

			<Divider borderWidth="100" />
			{fields.map((form, index) => (
				<Fragment key={index}>
					<Divider />
					<OptionDiscount form={form} indexValue={index} />
				</Fragment>
			))}

			<Divider borderWidth="100" />
			<div className="custom-button">
				<Button
					icon={PlusIcon}
					variant="tertiary"
					onClick={handleAddRuleFormOption}>
					Add option
				</Button>
			</div>
		</div>
	);
};

export default VolumeDiscountRule;
