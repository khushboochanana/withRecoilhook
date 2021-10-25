import React, { useReducer, useState } from 'react'
import Data from '@components/data'
import Input from 'lib/components/CustomInputBox'
// import { Default_Label } from 'constants'
export const MyContext = React.createContext()
// console.log(Default_Label)
const initialval = { isLoggedIn: false, user: {} }
const reducer = (state, action) => {
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
  const [val, setVal] = useState('')
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {/* <Area /> */}
      <Input value={val} onChange={setVal} />
      <div className='App useContext'>
        {state.isLoggedIn ? 'kyaaa' : 'bhupp'}
        <Data state={state} dispatch={dispatch} />
      </div>
    </MyContext.Provider>
  )
}
