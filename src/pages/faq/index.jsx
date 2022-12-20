import { useTheme, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../data/theme-tokens'
import { MainPanel } from '../../layouts'

const FAQ = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const questions = [
		{
			id: 1,
			question: 'Question 1',
			answer:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum tenetur iusto facilis praesentium sed dolorum corrupti, unde quam at architecto. Asperiores illum repudiandae voluptates praesentium! Quae sint repellendus dolorum voluptates!',
		},
		{
			id: 2,
			question: 'Question 2',
			answer:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, ea!',
		},
		{
			id: 3,
			question: 'Question 3',
			answer:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, ea!',
		},
		{
			id: 4,
			question: 'Question 4',
			answer:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, ea!',
		},
		{
			id: 5,
			question: 'Question 5',
			answer:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, ea!',
		},
		{
			id: 6,
			question: 'Question 6',
			answer:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, ea!',
		},
		{
			id: 7,
			question: 'Question 7',
			answer:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, ea!',
		},
	]

	return (
		<MainPanel header title="FAQ" subtitle="Frequently Asked Questions Page">
			{questions.map((question) => (
				<Accordion key={question.id}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography color={colors.greenAccent[500]} variant="h5">
							{question.question}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{question.answer}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</MainPanel>
	)
}

export default FAQ
