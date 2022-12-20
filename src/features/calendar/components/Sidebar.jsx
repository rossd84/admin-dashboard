import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	useTheme,
} from '@mui/material'
import { formatDate } from '@fullcalendar/core'
import { tokens } from '../../../data/theme-tokens'

const CalendarSidebar = (events) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const currentEvents = events.events

	return (
		<Box
			flex="1 1 20%"
			backgroundColor={colors.primary[400]}
			p="15px"
			borderRadius="4px"
		>
			<Typography variant="h5">Events</Typography>
			<List>
				{currentEvents.map((event) => (
					<ListItem
						key={event.id}
						sx={{
							backgroundColor: colors.greenAccent[500],
							margin: '10px 0',
							borderRadius: '2px',
						}}
					>
						<ListItemText
							primary={event.title}
							secondary={
								<Typography>
									{formatDate(event.start, {
										year: 'numeric',
										month: 'short',
										day: 'numeric',
									})}
								</Typography>
							}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	)
}

export default CalendarSidebar
