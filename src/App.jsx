import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Faq from './Components/FAQ/Faq'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Components/Blogs/Blogs';



function App() {
  const [readTimes, setReadTime] = useState(0);

  const handleReadTime = (readTime) =>{
      const readTimeInt = parseInt(readTime);
      setReadTime(readTimes + readTimeInt);

  }

  return (
    <div className="App container">
      
      <Header></Header>
      <Blogs 
      readTimes={readTimes}
      handleReadTime={handleReadTime}
      ></Blogs>
      
      <Faq></Faq>


    </div>
  )
}

export default App
