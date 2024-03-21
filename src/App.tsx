import { Grid, LegacyCard, Page } from "@shopify/polaris";
import { FC } from "react";

import GeneralForm from "./components/General";
import Header from "./components/Header";
import Preview from "./components/Preview";
import VolumeDiscountRule from "./components/VolumeDiscountRule";

const App: FC = () => {
	return (
		<Page fullWidth>
			<Grid>
				<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 8, xl: 8 }}>
					<Header />
					<LegacyCard title="General" sectioned>
						<GeneralForm />
					</LegacyCard>
					<VolumeDiscountRule />
				</Grid.Cell>
				<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 4 }}>
					<div className="" style={{ paddingTop: "52px" }}>
						<LegacyCard title="Preview" sectioned>
							<Preview />
						</LegacyCard>
					</div>
				</Grid.Cell>
			</Grid>
		</Page>
	);
};

export default App;
