import Select from 'react-select';
import { Controller } from 'react-hook-form';

type OptionType = {
	label: string;
	value: string;
};

type DropdownMenuProps = {
	label: string;
	options: OptionType[];
	name: string;
	control: any;
};

const SelectOptions = ({
	options,
	name,
	control,
	label,
}: DropdownMenuProps) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					const handleOnChange = (option: OptionType | null) => {
						field.onChange(option?.value);
					};

					return (
						<Select
							value={
								options.find(
									(option) => option.value === field.value
								) || null
							}
							onChange={handleOnChange}
							onBlur={field.onBlur}
							options={options}
							inputId={name}
						/>
					);
				}}
			/>
		</>
	);
};

export default SelectOptions;
