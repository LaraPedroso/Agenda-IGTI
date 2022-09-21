import { TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'
import { TableContainerCustom } from 'components/Home/TableContainerCustom'
import { TitleCustom } from 'components/Home/Title'
import { getEventsEndpoint, IEvent } from 'db/backend'
import { useEffect, useState } from 'react'
import DayWeek from 'template/Home/Data'
import { generateCalendar } from 'template/Home/Function/generateCalendar'
import { getToday } from './Function/getToday'

export function CalendarScreen() {
  const [events, setEvents] = useState<IEvent[]>([])

  const weeks = generateCalendar(getToday(), events)
  const FDate = weeks[0][0].date
  const LDate = weeks[weeks.length - 1][6].date

  //Muda os eventos sempre que FDate e LDate mudar
  useEffect(() => {
    getEventsEndpoint(FDate, LDate).then(setEvents)
  }, [FDate, LDate])
  // console.log(getEventsEndpoint)

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
                  <div>{cell.date}</div>
                  {cell.events.map((event) => (
                    <button>
                      aaa
                      {event.time || ''}
                      {event.desc}
                    </button>
                  ))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableContainerCustom>
    </Box>
  )
}
