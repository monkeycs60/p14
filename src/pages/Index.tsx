import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePickerComponent } from '../components/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import SelectOptions from '../components/SelectOptions';
import { departmentOptions } from '../lib/departmentOptions';
import { stateOptions } from '../lib/stateOptions';
import 'react-ts-modal-cserizay/src/styles/modalWindow.css';
import { ModalWindow } from 'react-ts-modal-cserizay/dist/cjs/components/ModalWindow';
import { useState } from 'react';
import { FormInputsTypes, FormSchema } from '../types/Form';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setEmployeeInfo } from '../redux/employeeSlice';

const Index = () => {
	// modal logic
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	// redux logic
	const dispatch = useAppDispatch();
	const employeeInfo = useAppSelector((state) => state.user);
	console.log('from redux', employeeInfo);

	// react hook form logic
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormInputsTypes>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = (data: FormInputsTypes) => {
		dispatch(setEmployeeInfo(data));
		openModal();
	};

	return (
		<>
			<div className='mx-auto my-2 flex max-w-7xl flex-col items-center justify-center gap-4  p-12 font-times'>
				<div className='text-3xl font-bold'>
					<h1>HRnet</h1>
				</div>
				<div className='flex flex-col items-center justify-center gap-4'>
					<a href={'/employee-list'} className='text-blue-800 underline'>
						View Current Employees
					</a>
					<h2 className='text-2xl font-bold'>Create Employee</h2>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='mt-8 flex w-[300px] flex-col gap-4'>
						<label htmlFor='firstName'>First Name</label>
						<Controller
							name='firstName'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<input
									{...field}
									type='text'
									id='firstName'
									className='w-2/3 rounded-sm border-[1px] border-black indent-1'
								/>
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
								<input
									{...field}
									type='text'
									id='lastName'
									className='w-2/3 rounded-sm border-[1px] border-black indent-1'
								/>
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
						<fieldset className='address flex flex-col gap-2 rounded-sm border-[1px] border-black p-6'>
							<legend>Address</legend>

							<label htmlFor='street'>Street</label>
							<Controller
								name='street'
								control={control}
								defaultValue=''
								render={({ field }) => (
									<input
										{...field}
										type='text'
										id='street'
										className='w-2/3 rounded-sm border-[1px] border-black indent-1'
									/>
								)}
							/>
							{errors.street && <p>'Street is required'</p>}

							<label htmlFor='city'>City</label>
							<Controller
								name='city'
								control={control}
								defaultValue=''
								render={({ field }) => (
									<input
										{...field}
										type='text'
										id='city'
										className='w-2/3 rounded-sm border-[1px] border-black indent-1'
									/>
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
								defaultValue={''}
								render={({ field }) => (
									<input
										{...field}
										type='text'
										id='zipCode'
										className='w-2/3 rounded-sm border-[1px] border-black indent-1'
									/>
								)}
							/>
							{errors.zipCode && (
								<p>Zip code must be a positive number</p>
							)}
						</fieldset>
						<SelectOptions
							label='Department'
							name='department'
							control={control}
							options={departmentOptions}
						/>
						{errors.department && <p>'Department is required'</p>}
						<div className='flex w-full justify-center'>
							<button
								type='submit'
								className='w-1/4 border-[1px] border-black bg-gray-100 text-sm'>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
			<ModalWindow isOpen={isOpen} onClose={closeModal}>
				<p>Employee Created!</p>
			</ModalWindow>
		</>
	);
};

export default Index;
