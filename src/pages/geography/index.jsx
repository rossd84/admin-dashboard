import GeographyChart from '../../components/GeographyChart'
import { MainPanel, ChartWrapper } from '../../layouts'

const Geography = () => {
	return (
		<MainPanel header title="Geography" subtitle="SimpleGeography Chart">
			<ChartWrapper border>
				<GeographyChart />
			</ChartWrapper>
		</MainPanel>
	)
}

export default Geography
