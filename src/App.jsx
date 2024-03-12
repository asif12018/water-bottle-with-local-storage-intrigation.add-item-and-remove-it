/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Bottles from './components/Bottles/Bottles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    
      <Bottles></Bottles>
    </>
  )
}

export default App
