import { XMarkIcon } from '@heroicons/react/20/solid'
import cn from 'classnames'
import { Dispatch, SetStateAction, useCallback } from 'react'

import { TagType } from '../pages/index'

type PropsType = {
  tags: TagType[]
  setSelectedTag: Dispatch<SetStateAction<string[]>>
  selectedTags: string[]
  selectable?: boolean
}

export const Tags: React.FC<PropsType> = ({
  tags,
  selectedTags,
  setSelectedTag,
  selectable = true,
}) => {
  const handleClickOnTag = useCallback(
    (tag: string) => {
      if (!selectable) {
        return
      }

      if (selectedTags.includes(tag)) {
        const filtred = selectedTags.filter((t) => t !== tag)
        setSelectedTag(filtred)
      } else {
        setSelectedTag((prev) => [...prev, tag])
      }
    },
    [selectedTags, setSelectedTag, selectable]
  )

  return (
    <div className="flex flex-wrap">
      {tags.map(({ _id, name }) => {
        return (
          <div
            key={_id}
            className={cn(
              'mx-2 md:mx-1 my-1 flex items-center rounded-md py-1 px-2 text-md md:text-sm bg-gray-100 dark:bg-zinc-700 shadow-lg',
              {
                'cursor-pointer': selectable,
              }
            )}
            onClick={() => handleClickOnTag(name)}
          >
            <div className="select-none">{name}</div>

            {selectable && selectedTags.includes(name) && (
              <XMarkIcon className="ml-2 h-3 w-3 rounded-md " />
            )}
          </div>
        )
      })}
    </div>
  )
}