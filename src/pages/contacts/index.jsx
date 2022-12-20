import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataContacts } from '../../services/mock-data/mockData'
import { TableList, MainPanel } from '../../layouts'

const Contacts = () => {
	const columns = [
		{
			field: 'id',
			headerName: 'ID',
			flex: 0.5,
		},
		{
			field: 'registrarId',
			headerName: 'Registrar ID',
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
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
			field: 'address',
			headerName: 'Address',
			flex: 1,
		},
		{
			field: 'city',
			headerName: 'City',
			flex: 1,
		},
		{
			field: 'zipCode',
			headerName: 'Zipcode',
			flex: 1,
		},
	]

	return (
		<MainPanel header title="invoices" subtitle="List of Invoice Balances">
			<TableList>
				<DataGrid
					rows={mockDataContacts}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</TableList>
		</MainPanel>
	)
}

export default Contacts
