import { PropsWithChildren, createContext, useCallback, useState } from "react";
import { OptionEnum } from "../components/VolumeDiscountRule/OptionDiscount/SelectDiscountType/constant";

interface SelectContextProps {
	selected: OptionEnum;
	handleSelectChange: (value: OptionEnum) => void;
}
export const SelectContextContext = createContext({} as SelectContextProps);

const SelectContextProvider = ({ children }: PropsWithChildren) => {
	const [selected, setSelected] = useState<OptionEnum>(OptionEnum.NONE);

	const handleSelectChange = useCallback((value: OptionEnum) => {
		setSelected(value);
	}, []);

	return (
		<SelectContextContext.Provider
			value={{
				selected,
				handleSelectChange,
			}}>
			{children}
		</SelectContextContext.Provider>
	);
};

export default SelectContextProvider;
