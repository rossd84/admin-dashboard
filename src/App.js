import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './context/theme-context'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Topbar from './features/topbar/Topbar'
import Sidebar from './features/sidebar/Sidebar'
import Dashboard from './pages/dashboard'
import Team from './pages/team'
import Contacts from './pages/contacts'
import Invoices from './pages/invoices'
import Form from './pages/form'
import CalendarPage from './pages/calendar'
import FAQ from './pages/faq'
import Bar from './pages/bar'
import Pie from './pages/pie'
import Line from './pages/line'
import Geography from './pages/geography'

function App() {
	const [theme, colorMode] = useMode()

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar />
					<main className="content">
						<Topbar />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/team" element={<Team />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/invoices" element={<Invoices />} />
							<Route path="/form" element={<Form />} />
							<Route path="/calendar" element={<CalendarPage />} />
							<Route path="/faq" element={<FAQ />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/pie" element={<Pie />} />
							<Route path="/line" element={<Line />} />
							<Route path="/geography" element={<Geography />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
