import DayWeek from 'template/Home/Data'

interface ICalendarCell {
  date: string
}

export function generateCalendar(date: string): ICalendarCell[][] {
  const weeks: ICalendarCell[][] = []
  const jsDate = new Date(date + 'T10:00:00')
  const firstDayOfMonth = new Date(jsDate.valueOf())
  const currentMonth = jsDate.getMonth()

  firstDayOfMonth.setDate(1)

  const dayOfWeek = firstDayOfMonth.getDay()
  firstDayOfMonth.setDate(1 - dayOfWeek)

  do {
    const week: ICalendarCell[] = []

    for (let i = 0; i < DayWeek.length; i++) {
      const monthStr = (firstDayOfMonth.getMonth() + 1)
        .toString()
        .padStart(2, '0')
      const DayStr = (firstDayOfMonth.getDate() + 1).toString().padStart(2, '0')

      const isoDate = `${firstDayOfMonth.getFullYear()}-${monthStr}-
        ${DayStr}`

      week.push({ date: isoDate })
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
    }
    weeks.push(week)
  } while (firstDayOfMonth.getMonth() === currentMonth)

  return weeks
}
