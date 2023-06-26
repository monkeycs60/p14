import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInputsTypes } from '../types/Form';

export type EmployeeState = {
	employees: FormInputsTypes[];
}

const initialState: EmployeeState = {
	employees: [],
}

export const employeeSlice = createSlice({
	name: 'employee',
	initialState,
	reducers: {
		setEmployeeInfo: (state, action: PayloadAction<FormInputsTypes>) => {
			state.employees.push(action.payload);
		},
	},
});

export const { setEmployeeInfo } = employeeSlice.actions;

export default employeeSlice.reducer;
