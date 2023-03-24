import cn from 'classnames'
import { format, isToday } from 'date-fns'
import { useContext } from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'

type PropsType = {
  onClick: (id: React.ContextType<typeof VisibilityContext>) => void
  selected: boolean
  date: Date
  itemId: string
}

export const Day: React.FC<PropsType> = ({
  onClick,
  selected,
  date,
  itemId,
}) => {
  const visibility = useContext(VisibilityContext)

  const isTonight = isToday(date) as boolean
  const dayOfWeek = format(date, 'eee')
  const dayMonth = format(date, 'd MMM').toUpperCase()

  const renderFormatedDate = () => {
    return (
      <>
        <div className="flex justify-center text-sm">{dayOfWeek}</div>
        <div className="flex justify-center text-sm">{dayMonth}</div>
      </>
    )
  }

  const renderTonight = () => {
    return (
      <div className="flex h-[48px] items-center justify-center ">Tonight</div>
    )
  }

  return (
    <>
      <div
        className={cn(
          'border-lg  0 mx-2 w-[100px] cursor-pointer select-none items-center justify-center rounded border-2 border-gray-300 py-2 px-2 font-bold hover:bg-red-500 hover:text-white dark:border-gray-800 dark:hover:bg-red-500 ',
          {
            'border-none bg-red-600 text-white hover:bg-red-500 dark:bg-red-500 dark:text-white  dark:hover:bg-red-500':
              selected,
          }
        )}
        onClick={() => onClick(visibility)}
      >
        {isTonight ? renderTonight() : renderFormatedDate()}
      </div>
    </>
  )
}
