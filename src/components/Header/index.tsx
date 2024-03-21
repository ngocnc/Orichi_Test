import { Button, Icon, Text } from "@shopify/polaris";
import { ArrowLeftIcon } from "@shopify/polaris-icons";
import { FC } from "react";

const Header: FC = () => {
	return (
		<div className="container-header">
			<div className="container-header__text">
				<div className="container-header__icon">
					<Icon source={ArrowLeftIcon} tone="base" />
				</div>
				<Text variant="headingXl" as="h4">
					Create volume discount
				</Text>
			</div>
			<Button submit size="large">
				Save
			</Button>
		</div>
	);
};

export default Header;
