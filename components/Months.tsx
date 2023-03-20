import cn from 'classnames'
import { Dispatch, SetStateAction } from 'react'

import { MONTHS } from '../lib/constants'

type PropsType = {
  selectedMonth: string
  setSelectedMonth: Dispatch<SetStateAction<string>>
}

export const Months: React.FC<PropsType> = ({
  selectedMonth,
  setSelectedMonth,
}) => {
  return (
    <div className="mx-2 mt-10 mb-5 flex flex-wrap justify-center rounded-lg border-2 border-gray-300 py-2 dark:border-gray-800 ">
      {MONTHS.map((month) => (
        <div
          key={month}
          onClick={() => setSelectedMonth(month)}
          className={cn('lg:text-md mx-2 my-1 cursor-pointer text-sm', {
            ['border-b-2 border-red-500 font-semibold text-red-500']:
              selectedMonth === month,
          })}
        >
          {month}
        </div>
      ))}
    </div>
  )
}
