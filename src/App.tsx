import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Navbar } from './components/Navbar';
import { Landing } from './pages/landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
    </div>
  )
}

export default App
