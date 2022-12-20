import { Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../data/theme-tokens'
import { mockDataInvoices } from '../../services/mock-data/mockData'
import { TableList, MainPanel } from '../../layouts'

const Invoices = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const columns = [
		{
			field: 'id',
			headerName: 'ID',
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'phone',
			headerName: 'Phone Number',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},
		{
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: (params) => (
				<Typography color={colors.greenAccent[500]}>
					${params.row.cost}
				</Typography>
			),
		},
		{
			field: 'date',
			headerName: 'Date',
			flex: 1,
		},
	]

	return (
		<MainPanel header title="Invoices" subtitle="List of Invoice Balances">
			<TableList>
				<DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
			</TableList>
		</MainPanel>
	)
}

export default Invoices
