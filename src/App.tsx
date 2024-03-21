import { Grid, LegacyCard, Page } from "@shopify/polaris";
import { FC } from "react";
import General from "./components/General";
import Preview from "./components/Preview";
import VolumeDiscountRule from "./components/VolumeDiscountRule";

const App: FC = () => {
	return (
		<Page fullWidth>
			<button type="submit">Submit</button>
			<Grid>
				<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
					<LegacyCard title="General" sectioned>
						<General />
					</LegacyCard>

					<VolumeDiscountRule />
				</Grid.Cell>
				<Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
					<LegacyCard title="Preview" sectioned>
						<Preview />
					</LegacyCard>
				</Grid.Cell>
			</Grid>
		</Page>
	);
};

export default App;
