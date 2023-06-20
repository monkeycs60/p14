import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

type DatePickerProps = {
	control: any;
	label: string;
	name: string;
};

export const DatePickerComponent = ({
	control,
	label,
	name,
}: DatePickerProps) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<Controller
				name={name}
				control={control}
				defaultValue=''
				render={({ field }) => (
					<DatePicker
						{...field}
						selected={field.value}
						onChange={(date: Date) => field.onChange(date)}
						dateFormat='MM/dd/yyyy'
						id={name}
					/>
				)}
			/>
		</div>
	);
};
