import BarChart from '../../components/BarChart'
import { ChartWrapper, MainPanel } from '../../layouts'

const Bar = () => {
	return (
		<MainPanel header title="Bar Chart" subtitle="Simple Bar Chart">
			<ChartWrapper>
				<BarChart />
			</ChartWrapper>
		</MainPanel>
	)
}

export default Bar
