import { useContext } from "react";
import { SelectContextContext } from "../context/SelectContext";

export const useSelectContext = () => useContext(SelectContextContext);
