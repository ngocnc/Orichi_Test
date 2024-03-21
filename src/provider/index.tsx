import { FC } from "react";
import FormProvider from "../contexts/FormContext";

type ProviderProps = {
	children: React.ReactNode;
};

const Provider: FC<ProviderProps> = ({ children }) => {
	return <FormProvider>{children}</FormProvider>;
};

export default Provider;
