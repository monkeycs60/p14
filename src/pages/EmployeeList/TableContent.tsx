import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/useRedux.tsx';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

const TableContent = () => {
	const employeeInfo = useAppSelector((state) => state.user.employees);

	const columns = useMemo<MRT_ColumnDef[]>(
		() => [
			{
				accessorKey: 'firstName', //access nested data with dot notation
				header: 'First Name',
				size: 150,
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				size: 150,
			},
			{
				accessorKey: 'startDate', //normal accessorKey
				header: 'Start Date',
				size: 200,
			},
			{
				accessorKey: 'department',
				header: 'Department',
				size: 150,
			},
			{
				accessorKey: 'birthDate',
				header: 'Date Of Birth',
				size: 150,
			},
			{
				accessorKey: 'street',
				header: 'Street',
				size: 150,
			},
			{
				accessorKey: 'city',
				header: 'City',
				size: 150,
			},
			{
				accessorKey: 'state',
				header: 'State',
				size: 150,
			},
			{
				accessorKey: 'zipCode',
				header: 'Zip',
				size: 150,
			},
		],
		[]
	);
	return (
		<MaterialReactTable
			columns={columns}
			data={employeeInfo}
			enableColumnActions={false}
			localization={{
				noRecordsToDisplay: 'No data available in table',
			}}
			enableColumnFilters={false}
			enableFullScreenToggle={false}
			enableHiding={false}
			enableDensityToggle={false}
            enableGlobalFilterModes={true}
		/>
	);
};

export default TableContent;
