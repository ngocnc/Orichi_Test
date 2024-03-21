import { Button, Divider } from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import { FC, Fragment } from "react";
import { useFormContext } from "../../hooks/useFormContext";
import OptionDiscount from "./OptionDiscount";

const VolumeDiscountRule: FC = () => {
	const { valueForms, handleAddRuleForm } = useFormContext();

	const handleAddRuleFormOption = () => {
		handleAddRuleForm();
	};

	return (
		<div className="Polaris-LegacyCard">
			<div className="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
				<h3 className="Polaris-Text--root Polaris-Text--headingSm">
					Volume Discount Rule
				</h3>
			</div>

			<Divider borderWidth="100" />
			{valueForms.rule.map((form, index) => (
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
