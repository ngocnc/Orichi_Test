import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Provider from "./provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppProvider i18n={enTranslations}>
			<Provider>
				<App />
			</Provider>
		</AppProvider>
	</React.StrictMode>
);
