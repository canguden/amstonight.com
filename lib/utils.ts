import { MONTHS } from './constants'

export const getDates = (currMonth: string) => {
  const currentDate = new Date()
  const currentMonth = MONTHS.findIndex((month) => month === currMonth)
  const currentYear = currentDate.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const datesArray = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(currentYear, currentMonth, i + 1)
  )

  return datesArray
}