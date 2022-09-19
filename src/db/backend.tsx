export interface ICalendar {
  id: number
  name: string
  color: string
}

export interface IEvent {
  id: number
  date: string
  time?: string
  desc: string
  calerdarId: number
}

export function getCalendarsEndpoint(): Promise<ICalendar[]> {
  return fetch('http://localhost:3000/calendars').then((resp) => {
    return resp.json()
  })
}

export function getEventsEndpoint(): Promise<IEvent[]> {
  return fetch('http://localhost:3000/events').then((resp) => {
    return resp.json()
  })
}
