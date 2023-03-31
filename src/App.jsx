import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Faq from './Components/FAQ/Faq'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { toast, ToastContainer } from 'react-toastify';
import { ToastContainer, toast } from 'react-toast'
import Blogs from './Components/Blogs/Blogs';

function App() {
  const [readTimes, setReadTime] = useState(0);
  const [bookmarks, setBookmark] = useState([]);

  const handleReadTime = (readTime) => {
    const readTimeInt = parseInt(readTime);
    setReadTime(readTimes + readTimeInt);
  }

  const handleBookmark = (bookmark) => {
    if (bookmarks.includes(bookmark)) {
      toast('This bookmark is already added');
      return;
    }
    const newBookmark = [...bookmarks, bookmark];
    setBookmark(newBookmark);
  }

  return (
    <div className="App container">
      <Header></Header>
      <Blogs
        readTimes={readTimes}
        handleReadTime={handleReadTime}
        handleBookmark={handleBookmark}
      ></Blogs>
      <ToastContainer></ToastContainer>
      <Faq></Faq>
    </div>
  )
}

export default App
