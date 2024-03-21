import { FC } from "react";

type Props = {
	form: any;
	listOptions: any;
};

const SelectField: FC<Props> = ({ form, listOptions }) => {
	return (
		<div className="">
			<div className="Polaris-Labelled__LabelWrapper">
				<div className="Polaris-Label">
					<label htmlFor={form.name}>{form.label}</label>
				</div>
			</div>
			<div className="Polaris-Select">
				<select {...form} className="Polaris-Select__Input">
					{listOptions.map((option: any) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<div className="Polaris-Select__Content">
					<span className="Polaris-Select__SelectedOption">% discount</span>
					<span className="Polaris-Select__Icon">
						<div className="Polaris-Icon">
							<svg
								viewBox="0 0 20 20"
								className="Polaris-Icon__Svg"
								focusable="false"
								aria-hidden="true">
								<path d="M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z"></path>
								<path d="m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z"></path>
							</svg>
						</div>
					</span>
				</div>
				<div className="Polaris-Select__Backdrop"></div>
			</div>
		</div>
	);
};

export default SelectField;
