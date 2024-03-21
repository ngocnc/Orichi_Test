import { Text } from "@shopify/polaris";
import { FC } from "react";

import TablePreview from "./TablePreview";

const Preview: FC = () => {
	return (
		<div
			className=""
			style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			<Text as="h1" variant="headingLg" alignment="center" fontWeight="bold">
				Buy more and Save
			</Text>
			<Text as="p" fontWeight="medium">
				Apply for all products in store
			</Text>
			<div className="custom-table">
				<TablePreview />
			</div>
		</div>
	);
};

export default Preview;
