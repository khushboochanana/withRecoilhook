import logo from './logo.svg'
import React from 'react'
import './App.css'
import { RecoilRoot } from 'recoil'
import User from './user'
import { GlobalDataStore } from './recoil/index'
import { WithRecoilAxios } from './customAxios'

function App () {
  return (
    <RecoilRoot>
      <div className='App'>
        <GlobalDataStore />
        <WithRecoilAxios>
          <header className='App-header'>
            <User></User>
          </header>
        </WithRecoilAxios>
      </div>
    </RecoilRoot>
  )
}

export default App
