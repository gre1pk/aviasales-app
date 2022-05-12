import { format } from 'date-fns'

export const getTimeFromMins = (mins) => {
  const hours = Math.trunc(mins / 60)
  const minutes = mins % 60
  return `${hours}ч ${minutes}м`
}

export const getTimeFormat = (date) => format(new Date(date), 'HH:mm')
