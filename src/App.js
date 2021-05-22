import logo from './logo.svg'
import React from 'react'
import './App.css'
import { RecoilRoot } from 'recoil'
import User from './user'
import { GlobalDataStore } from './recoil/index'

function App () {
  return (
    <RecoilRoot>
      <div className='App'>
        <GlobalDataStore />
        <header className='App-header'>
          <User></User>
        </header>
      </div>
    </RecoilRoot>
  )
}

export default App
