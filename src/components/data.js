import { useState, useMemo } from 'react'
import One from '../onMore'
import Two from '../TwoMore'

export default function Data ({ state, dispatch }) {
  const { user } = state
  setTimeout(() => {
    dispatch({ type: 'SET_USER', payload: { user: { name: 'Woowwww' } } })
  }, 3000)
  return (
    <div>
      {user?.name}
      <Two />
      <One />
    </div>
  )
}
