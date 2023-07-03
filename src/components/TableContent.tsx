import { useMemo } from 'react';
import { useAppSelector } from '../hooks/useRedux.tsx';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useResponsiveTable } from '../hooks/useResponsiveTable.tsx';

const TableContent = () => {
	const employeeInfo = useAppSelector((state) => state.user.employees);

	const { columnSize, fontSize, titleFontSize, isMobile } =
		useResponsiveTable();

	const columns = useMemo<MRT_ColumnDef[]>(
		() => [
			{
				accessorKey: 'firstName', //access nested data with dot notation
				header: 'First Name',
				size: columnSize,
			},
			{
				accessorKey: 'lastName',
				header: 'Last Name',
				size: columnSize,
			},
			{
				accessorKey: 'startDateModified', //normal accessorKey
				header: 'Start Date',
				size: columnSize * 1.5,
			},
			{
				accessorKey: 'department',
				header: 'Department',
				size: columnSize,
			},
			{
				accessorKey: 'birthDateModified',
				header: 'Date Of Birth',
				size: columnSize,
			},
			{
				accessorKey: 'street',
				header: 'Street',
				size: columnSize,
			},
			{
				accessorKey: 'city',
				header: 'City',
				size: columnSize,
			},
			{
				accessorKey: 'state',
				header: 'State',
				size: columnSize,
			},
			{
				accessorKey: 'zipCode',
				header: 'Zip',
				size: columnSize,
			},
		],
		[columnSize]
	);
	return (
		<MaterialReactTable
			columns={columns}
			data={employeeInfo}
			enableColumnActions={false}
			localization={{
				noRecordsToDisplay: 'No data available in table',
				search: 'Search among records',
			}}
			enableColumnFilters={false}
			enableFullScreenToggle={false}
			enableHiding={false}
			enableDensityToggle={false}
			enableGlobalFilterModes={true}
			muiTablePaginationProps={{
				rowsPerPageOptions: [10, 25, 50, 100],
				labelRowsPerPage: 'Show per page',
				sx: {},
				count: employeeInfo.length,
				showFirstButton: !isMobile,
				showLastButton: !isMobile,
				labelDisplayedRows(paginationInfo) {
					if (!isMobile)
						return `Display ${paginationInfo.from} - ${
							paginationInfo.to
						} of ${paginationInfo.count} entries |  
						Page ${paginationInfo.page + 1}/${paginationInfo.count % 10}`;
					else return `Page ${paginationInfo.page + 1}/${
						paginationInfo.count % 10
					}`;
				},
			}}
			positionPagination='bottom'
			positionGlobalFilter='left'
			muiSearchTextFieldProps={{
				fullWidth: true,
				variant: 'outlined',
			}}
			muiTableBodyRowProps={{
				sx: {
					'&:nth-of-type(odd)': {
						backgroundColor: 'lightgray',
					},
				},
			}}
			muiTableBodyCellProps={{
				sx: {
					fontSize: fontSize,
				},
			}}
			muiTableHeadCellProps={{
				sx: {
					fontSize: titleFontSize,
				},
			}}
			muiBottomToolbarProps={{
				sx: {},
			}}
		/>
	);
};

export default TableContent;
