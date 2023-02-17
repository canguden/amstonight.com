import { groq } from "next-sanity"

*[_type='event' && slug.current == ${params.event}]
const Event = () => {
  return (
    <div>
      event
{/* params: id slug --> fetch */}


    </div>
  )
}

export default Event
