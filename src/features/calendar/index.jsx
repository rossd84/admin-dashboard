import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import CalendarSidebar from './components/Sidebar'

const CalendarPage = () => {
	const [currentEvents, setCurrentEvents] = useState([])

	const handleDateClick = (selected) => {
		const title = prompt('Please enter a new title for your event')
		const calendarApi = selected.view.calendar
		calendarApi.unselect()

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			})
		}
	}

	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${selected.event.title}'`
			)
		) {
			selected.event.remove()
		}
	}

	return (
		<Box m="20px">
			<Header title="CALENDAR" subtitle="Full Calendar Interative Page" />

			<Box display="flex" justifyContent="space-between">
				<CalendarSidebar events={currentEvents} />

				<Box flex="1 1 100%" ml="15ml">
					<FullCalendar
						height="75vh"
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
						}}
						initialView="dayGridMonth"
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={(events) => setCurrentEvents(events)}
						initialEvents={[
							{ id: '1234', title: 'All-day event', date: '2022-12-19' },
							{ id: '4321', title: 'Timed event', date: '2022-12-30' },
						]}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default CalendarPage
