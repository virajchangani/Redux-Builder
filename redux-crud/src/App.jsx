import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import Crud from './Crud'

function App() {


  return (
  <div>
    <Provider store={store}>
     <Crud/>
    </Provider>
  </div>
  )
}

export default App
