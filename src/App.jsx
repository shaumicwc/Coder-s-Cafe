import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Faq from './Components/FAQ/Faq'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Components/Blogs/Blogs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header></Header>
      <Blogs></Blogs>
      <Faq></Faq>


    </div>
  )
}

export default App
