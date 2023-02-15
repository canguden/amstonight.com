import { getYear } from 'date-fns'

export const CurrentYear = () => {
  const currentDate = new Date()
  const currentYear = getYear(currentDate)

  return <div className="my-2  mx-6 text-[0.8rem] font-thin flex justify-start">Amsterdam Tonight - Party Agenda Amsterdam {currentYear} </div>
}