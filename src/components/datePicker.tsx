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
		<div className='flex flex-col'>
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
						className='w-2/3 rounded-sm border-[1px] border-black indent-1'
						autoComplete='off'
					/>
				)}
			/>
		</div>
	);
};
