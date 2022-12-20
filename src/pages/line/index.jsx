import LineChart from '../../components/LineChart'
import { MainPanel, ChartWrapper } from '../../layouts'

const Line = () => {
	return (
		<MainPanel header title="Line Chart" subtitle="Simple Line Chart">
			<ChartWrapper>
				<LineChart />
			</ChartWrapper>
		</MainPanel>
	)
}

export default Line
