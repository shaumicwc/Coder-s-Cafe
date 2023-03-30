import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Faq from './Components/FAQ/Faq'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header></Header>
      <Faq></Faq>


    </div>
  )
}

export default App
