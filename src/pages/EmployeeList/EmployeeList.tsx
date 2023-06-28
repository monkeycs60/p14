import TableContent from '../../components/TableContent.tsx';

const EmployeeList = () => {
	return (
		<div className='m-auto mt-8 flex w-[90%] max-w-7xl flex-col gap-8 lg:w-2/3 '>
			<h1 className='text-center font-times text-3xl font-bold'>
				Current Employees
			</h1>
			<TableContent />
			<a
				href={'/'}
				className='mb-8 text-center text-blue-800 underline lg:mb-0'>
				Home
			</a>
		</div>
	);
};

export default EmployeeList;
