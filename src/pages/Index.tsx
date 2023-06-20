import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { DatePickerComponent } from '../components/datePicker';
import 'react-datepicker/dist/react-datepicker.css';
import SelectOptions from '../components/SelectOptions';
import { departmentOptions } from '../lib/departmentOptions';
import { stateOptions } from '../lib/stateOptions';

const schema = z
	.object({
		firstName: z
			.string()
			.nonempty()
			.min(3, 'First name must be at least 3 characters long')
			.max(8, 'First name must be at most 8 characters long')
			.refine(
				(value) => value.trim().length !== 0,
				'First name is required'
			),
		lastName: z
			.string()
			.nonempty()
			.min(3, 'Last name must be at least 3 characters long')
			.max(8, 'Last name must be at most 8 characters long')
			.refine((value) => value.trim().length !== 0, 'Last name is required'),
		birthDate: z
			.date()
			.refine((value) => value !== undefined, 'Birth date is required'),
		startDate: z
			.date()
			.refine((value) => value !== undefined, 'Start date is required'),
		street: z.string().nonempty(),
		city: z.string().nonempty(),
		state: z.string().nonempty(),
		zipCode: z
			.string()
			.nonempty('Zip code is required')
			.refine((value) => {
				const number = parseInt(value, 10);
				return !Number.isNaN(number) && number > 0;
			}, 'Zip code must be a positive number'),
		department: z.string().nonempty(),
	})
	.required();

type EmployeeDetails = z.infer<typeof schema>;

const Index = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<EmployeeDetails>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: EmployeeDetails) => {
		console.log(data);
	};

	return (
		<div className='max-w-7xl m-auto w-1/2 flex flex-col bg-zinc-400 justify-center items-center'>
			<div className='title'>
				<h1>HRnet</h1>
			</div>
			<div className='container'>
				<a href='employee-list.html'>View Current Employees</a>
				<h2>Create Employee</h2>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
					<label htmlFor='firstName'>First Name</label>
					<Controller
						name='firstName'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<input {...field} type='text' id='firstName' />
						)}
					/>
					{errors.firstName && (
						<p>'First name must be between 3 and 8 characters'</p>
					)}

					<label htmlFor='lastName'>Last Name</label>
					<Controller
						name='lastName'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<input {...field} type='text' id='lastName' />
						)}
					/>
					{errors.lastName && (
						<p>'Last name must be between 3 and 8 characters'</p>
					)}

					<DatePickerComponent
						control={control}
						label='Date of Birth'
						name='birthDate'
					/>
					{errors.birthDate && <p>'Birth date is required'</p>}
					<DatePickerComponent
						control={control}
						label='Start Date'
						name='startDate'
					/>
					{errors.startDate && <p>'Start date is required'</p>}
					<fieldset className='address'>
						<legend>Address</legend>

						<label htmlFor='street'>Street</label>
						<Controller
							name='street'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<input {...field} type='text' id='street' />
							)}
						/>
						{errors.street && <p>'Street is required'</p>}

						<label htmlFor='city'>City</label>
						<Controller
							name='city'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<input {...field} type='text' id='city' />
							)}
						/>
						{errors.city && <p>'City is required'</p>}

						<SelectOptions
							label='State'
							name='state'
							control={control}
							options={stateOptions}
						/>
						{errors.state && <p>'State is required'</p>}

						<label htmlFor='zipCode'>Zip Code</label>
						<Controller
							name='zipCode'
							control={control}
							defaultValue={""}
							render={({ field }) => (
								<input {...field} type='text' id='zipCode' />
							)}
						/>
						{errors.zipCode && <p>Zip code must be a positive number</p>}
					</fieldset>
					<SelectOptions
						label='Department'
						name='department'
						control={control}
						options={departmentOptions}
					/>
					{errors.department && <p>'Department is required'</p>}

					<button type='submit'>Save</button>
				</form>
				<div id='confirmation' className='modal'>
					Employee Created!
				</div>
			</div>
		</div>
	);
};

export default Index;
