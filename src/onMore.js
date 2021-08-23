import { useContext, useMemo } from 'react'
// Usage

import { MyContext } from './reactStore'

export default function OneMore () {
  const { state } = useContext(MyContext)
  return (
    <div>
      Inside ne moreee
      {state.isLoggedIn ? 'hiiiiiiiiiiiiiiii' : 'byyyyyyyyyyyyy'}
    </div>
  )
}
