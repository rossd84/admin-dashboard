import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from '../data/theme-mui-settings'

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
})

export const useMode = () => {
	const [mode, setMode] = useState('dark')

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[]
	)

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
	return [theme, colorMode]
}
