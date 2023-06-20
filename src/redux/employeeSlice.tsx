import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeDetails } from '../types/Employee';

// Define the initial state using that type
const initialState: EmployeeDetails = {
	firstName: '',
	lastName: '',
	birthDate: '',
	startDate: '',
	street: '',
	city: '',
	state: '',
	zipCode: '',
	department: '',
};

export const employeeSlice = createSlice({
	name: 'employee',
	initialState,
	reducers: {
		setEmployeeInfo: (state, action: PayloadAction<EmployeeDetails>) => {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.birthDate = action.payload.birthDate;
			state.startDate = action.payload.startDate;
			state.street = action.payload.street;
			state.city = action.payload.city;
			state.state = action.payload.state;
			state.zipCode = action.payload.zipCode;
			state.department = action.payload.department;
		}
	},
});

export const { setEmployeeInfo } = employeeSlice.actions;

export default employeeSlice.reducer;
