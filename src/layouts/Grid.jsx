import { Box } from '@mui/material'

const Grid = ({ children }) => {
	return (
		<Box
			display="grid"
			gridTemplateColumns="repeat(12, 1fr)"
			gridAutoRows="140px"
			gap="20px"
		>
			{children}
		</Box>
	)
}

export default Grid
