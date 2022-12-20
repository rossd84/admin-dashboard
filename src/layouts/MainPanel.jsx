import { Box } from '@mui/material'
import Header from '../components/Header'

const MainPanel = ({
	children,
	header = false,
	title = 'Title',
	subtitle = 'Subtitle needed',
}) => {
	return (
		<Box m="20px">
			{header && <Header title={title} subtitle={subtitle} />}
			{children}
		</Box>
	)
}

export default MainPanel
