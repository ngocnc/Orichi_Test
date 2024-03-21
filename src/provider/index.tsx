import { FC } from "react";
import FormProvider from "../context/FormContext";
import SelectContextProvider from "../context/SelectContext";

type ProviderProps = {
	children: React.ReactNode;
};

const Provider: FC<ProviderProps> = ({ children }) => {
	return (
		<FormProvider>
			<SelectContextProvider>{children}</SelectContextProvider>
		</FormProvider>
	);
};

export default Provider;
