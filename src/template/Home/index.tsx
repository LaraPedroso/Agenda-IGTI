import { TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'
import { TableContainerCustom } from 'components/Home/TableContainerCustom'
import { TitleCustom } from 'components/Home/Title'
import DayWeek from 'template/Home/Data'
import { generateCalendar } from 'template/Home/Function/generateCalendar'
import { getToday } from './Function/getToday'

export function CalendarScreen() {
  const weeks = generateCalendar(getToday())

  return (
    <Box sx={{ display: 'flex', height: '100%', alignItems: 'stretch' }}>
      <TitleCustom title={'Diary TS'} />

      <TableContainerCustom>
        <TableHead>
          <TableRow>
            {DayWeek.map((day) => (
              <TableCell align="center">{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {weeks.map((week, i) => (
            <TableRow key={i}>
              {week.map((cell) => (
                <TableCell align="center" key={cell.date}>
                  {cell.date}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableContainerCustom>
    </Box>
  )
}
