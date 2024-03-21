import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  
  const [bookmarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = timeread => {
    setReadingTime(readingTime + timeread)
  }


  const handleAddBookMark = blog => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks)
    // console.log(blog)
  }
  
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='md:flex gap-6'>
      <Blogs handleAddBookMark={handleAddBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
