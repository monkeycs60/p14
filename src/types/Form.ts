import { z } from 'zod';

export const FormSchema = z
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

export type FormInputsTypes = z.infer<typeof FormSchema>;
