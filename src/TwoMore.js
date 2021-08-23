import { useState, useContext } from 'react'
// Usage
import { MyContext } from './reactStore'

export default function Data () {
  const { dispatch } = useContext(MyContext)

  setTimeout(() => {
    dispatch({ type: 'LOGGED_IN', payload: { isLoggedIn: true } })
  }, 3000)
  return <div>TwoMore hererre</div>
}
