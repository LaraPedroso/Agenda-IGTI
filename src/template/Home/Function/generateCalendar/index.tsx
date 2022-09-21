import { IEvent } from 'db/backend'
import DayWeek from 'template/Home/Data'

interface ICalendarCell {
  date: string
  events: IEvent[]
}

export function generateCalendar(
  date: string,
  allEvents: IEvent[]
): ICalendarCell[][] {
  // dias do calendario
  const weeks: ICalendarCell[][] = []
  console.log('allEvents: ', allEvents)

  // data
  const jsDate = new Date(date + 'T12:00:00')
  const currentMonth = jsDate.getMonth()

  const currentDay = new Date(jsDate.valueOf())
  currentDay.setDate(1)

  const dayOfWeek = currentDay.getDay()
  currentDay.setDate(1 - dayOfWeek)

  do {
    const week: ICalendarCell[] = []

    for (let i = 0; i < DayWeek.length; i++) {
      // const monthStr = (currentDay.getMonth() + 1).toString().padStart(2, '0')

      const dayStr = currentDay.getDate().toString().padStart(2, '0')

      const isoDate = `${dayStr}`

      week.push({
        date: isoDate,
        events: allEvents.filter((e) => e.date === isoDate)
      })
      currentDay.setDate(currentDay.getDate() + 1)
    }
    weeks.push(week)
  } while (currentDay.getMonth() === currentMonth)

  return weeks
}
