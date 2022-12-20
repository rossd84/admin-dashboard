import { Box } from '@mui/material'
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../data/theme-tokens'
import { useTheme } from '@mui/material'
// import { mockDataContacts } from '../../services/mock-data/mockData';

const TableList = ({ children }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box
			m="40px 0 0 0"
			height="75vh"
			sx={{
				'& .MuiDataGrid-root': {
					border: 'none',
				},
				'& .MuiDataGrid-cell': {
					borderBottem: 'none',
				},
				'& .name-column--cell': {
					color: colors.greenAccent[300],
				},
				'& .MuiDataGrid-columnHeaders': {
					backgroundColor: colors.blueAccent[700],
					borderBottom: 'none',
				},
				'& .MuiDataGrid-virtualScroller': {
					backgroundColor: colors.primary[400],
				},
				'& .MuiDataGrid-footerContainer': {
					borderTop: 'none',
					backgroundColor: colors.blueAccent[700],
				},
				'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
					color: `${colors.grey[100]} !important`,
				},
			}}
		>
			{children}
		</Box>
	)
}

export default TableList
