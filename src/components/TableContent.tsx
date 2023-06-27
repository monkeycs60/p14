import { useMemo } from 'react';
import { useAppSelector } from '../hooks/useRedux.tsx';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

const TableContent = () => {
	const employeeInfo = useAppSelector((state) => state.user.employees);

	const columns = useMemo<MRT_ColumnDef[]>(
		() => [
			{
				accessorKey: 'firstName', //access nested data with dot notation
				header: 'First Name',
				size: 100,
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				size: 100,
			},
			{
				accessorKey: 'startDateModified', //normal accessorKey
				header: 'Start Date',
				size: 150,
			},
			{
				accessorKey: 'department',
				header: 'Department',
				size: 100,
			},
			{
				accessorKey: 'birthDateModified',
				header: 'Date Of Birth',
				size: 100,
			},
			{
				accessorKey: 'street',
				header: 'Street',
				size: 100,
			},
			{
				accessorKey: 'city',
				header: 'City',
				size: 100,
			},
			{
				accessorKey: 'state',
				header: 'State',
				size: 100,
			},
			{
				accessorKey: 'zipCode',
				header: 'Zip',
				size: 100,
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
				search: 'Search the loop',
			}}
			enableColumnFilters={false}
			enableFullScreenToggle={false}
			enableHiding={false}
			enableDensityToggle={false}
			enableGlobalFilterModes={true}
			muiTablePaginationProps={{
				rowsPerPageOptions: [10, 25, 50, 100],
			}}
			positionPagination='top'
			muiSearchTextFieldProps={{
				fullWidth: true,
			}}
			muiTopToolbarProps={{
				sx: {
					// background: 'red',
				},
			}}
		/>
	);
};

export default TableContent;
