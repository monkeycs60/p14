import TableContent from './TableContent.tsx';

const EmployeeList = () => {
	
	return (
		<div className='m-auto mt-8 flex w-2/3 max-w-7xl flex-col gap-8 '>
			<h1 className='text-center font-times text-3xl font-bold'>
				Current Employees
			</h1>
			<TableContent />
			<a href={'/'} className='text-center text-blue-800 underline'>
				Home
			</a>
		</div>
	);
};

export default EmployeeList;
