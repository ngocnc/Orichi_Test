/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeField } from "@/contexts/FormContext";
import { forwardRef } from "react";

type Props = TypeField & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return (
		<div className="" ref={ref}>
			<div className="Polaris-Labelled__LabelWrapper">
				<div className="Polaris-Label">
					<label htmlFor={props.name}>{props.label}</label>
				</div>
			</div>
			<div className="Polaris-Connected">
				<div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
					<div className="Polaris-TextField Polaris-TextField--hasValue">
						<input
							type="text"
							className="Polaris-TextField__Input"
							{...props}
						/>
						<div className="Polaris-TextField__Backdrop"></div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default InputField;
