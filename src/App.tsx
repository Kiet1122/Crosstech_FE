import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './layout/Navbar';
import { Bodyab } from './layout/bodya';
function App() {


  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Bodyab />
      </div>
    </div>
  )
}
export default App
