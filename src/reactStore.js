import React, { useReducer } from 'react'
import Data from './data'

export const MyContext = React.createContext()
const initialval = { isLoggedIn: false, user: {} }
const reducer = (state, action) => {
  console.log('heeerrerer')
  switch (action.type) {
    case 'LOGGED_IN':
      return { ...state, isLoggedIn: action.payload.isLoggedIn }
    case 'SET_USER':
      return { ...state, user: action.payload.user }
    default:
      return state
  }
}
export default function ReactStoreapp ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialval)
  console.log(state)
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {/* <Area /> */}

      <div className='App useContext'>
        {state.isLoggedIn ? 'kyaaa' : 'bhupp'}
        <Data state={state} dispatch={dispatch} />
      </div>
    </MyContext.Provider>
  )
}
