import PieChart from '../../components/PieChart'
import { ChartWrapper, MainPanel } from '../../layouts'

const Pie = () => {
	return (
		<MainPanel header title="Pie Chart" subtitle="Simple Pie Chart">
			<ChartWrapper>
				<PieChart />
			</ChartWrapper>
		</MainPanel>
	)
}

export default Pie
