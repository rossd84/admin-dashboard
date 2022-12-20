import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../data/theme-tokens'
import { mockDataTeam } from '../../services/mock-data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { TableList, MainPanel } from '../../layouts'

const Team = () => {
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
			field: 'access',
			headerName: 'Access Level',
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width="60%"
						m="0 auto"
						p="5px"
						display="flex"
						justifyContent="center"
						backgroundColor={
							access === 'admin'
								? colors.greenAccent[600]
								: colors.greenAccent[700]
						}
						borderRadius="4px"
					>
						{access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
						{access === 'manager' && <SecurityOutlinedIcon />}
						{access === 'user' && <LockOpenOutlinedIcon />}
						<Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
							{access}
						</Typography>
					</Box>
				)
			},
		},
	]

	return (
		<MainPanel header title="team" subtitle="Managing the Team Members">
			<TableList>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</TableList>
		</MainPanel>
	)
}

export default Team
