import cn from 'classnames';
import { format, isToday } from 'date-fns';
import { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

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
        <div className="flex text-sm justify-center">{dayOfWeek}</div>
        <div className="flex text-sm justify-center">{dayMonth}</div>
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
          'select-none  border-2 border-gray-300 dark:border-gray-800 border-lg mx-2 w-[100px] cursor-pointer items-center justify-center 0 rounded py-2 px-2 font-bold hover:bg-red-500 hover:text-white dark:hover:bg-red-500 ',
          {
            'bg-red-600 dark:bg-red-500 border-none hover:bg-red-500  dark:hover:bg-red-500 text-white': selected,
          }
        )}
        onClick={() => onClick(visibility)}
      >
        {isTonight ? renderTonight() : renderFormatedDate()}
      </div>

    </>
  )
}