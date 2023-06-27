import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInputsTypes } from '../types/Form';

type EmployeeType = FormInputsTypes & {
	startDateModified: string;
	birthDateModified: string;
};

export type EmployeeState = {
	employees: EmployeeType[];
};

const initialState: EmployeeState = {
	employees: [],
};

export const employeeSlice = createSlice({
	name: 'employee',
	initialState,
	reducers: {
		setEmployeeInfo: (state, action: PayloadAction<FormInputsTypes>) => {
			const startDateModified =
				action.payload.startDate.toLocaleDateString();
			const birthDateModified =
				action.payload.birthDate.toLocaleDateString();

			// create a new employee with the modified dates
			const newEmployee = {
				...action.payload,
				startDateModified,
				birthDateModified,
			};

			state.employees.push(newEmployee);
		},
	},
});

export const { setEmployeeInfo } = employeeSlice.actions;

export default employeeSlice.reducer;
