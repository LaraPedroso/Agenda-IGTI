import { TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'
import { TableContainerCustom } from 'components/Home/TableContainerCustom'
import { TitleCustom } from 'components/Home/Title'
import { DayWeek } from 'template/Home/Data'

export function CalendarScreen() {
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
          <TableRow>
            {DayWeek.map((day) => (
              <TableCell align="center">Xasdasd</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {DayWeek.map((day) => (
              <TableCell align="center">asdasA</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {DayWeek.map((day) => (
              <TableCell align="center">asdasdN</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </TableContainerCustom>
    </Box>
  )
}
