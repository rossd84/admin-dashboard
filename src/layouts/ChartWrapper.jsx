import { Box, useTheme } from '@mui/material'
import { tokens } from '../data/theme-tokens'

const ChartWrapper = ({ children, border = false }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box
			height="75vh"
			border={border && `1px solid ${colors.grey[100]}`}
			borderRadius={border && '4px'}
		>
			{children}
		</Box>
	)
}

export default ChartWrapper
