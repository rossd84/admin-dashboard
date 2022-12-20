/*
INFO: 
    To be used as children inside Grid layout component
    
PARAMS:
    banner: default=false
        formating for banner cards on dashboard.

    scroll: default=false
        allows scrolling inside card.

    chart: default=false
        formating for charts

    chartTitle
        add title to chart cards

    width: default=4

    height: default=2
*/

import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../data/theme-tokens'

const GridCard = ({
	children,
	banner = false,
	scroll = false,
	chart = false,
	chartTitle,
	width = 4,
	height = 2,
}) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box
			gridColumn={banner ? 'span 3' : `span ${width}`}
			gridRow={banner ? `span 1` : `span ${height}`}
			backgroundColor={colors.primary[400]}
			display={banner && 'flex'}
			alignItems={banner && 'center'}
			justifyContent={banner && 'center'}
			overflow={scroll && 'auto'}
		>
			{chart && (
				<Typography
					variant="h5"
					fontWeight="600"
					sx={{ padding: '30px 30px 15px 30px' }}
				>
					{chartTitle}
				</Typography>
			)}
			{children}
		</Box>
	)
}

export default GridCard
