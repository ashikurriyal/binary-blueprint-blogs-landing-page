import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  
  const [bookmarks, setBookMarks] = useState([])

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
      <Blogs handleAddBookMark={handleAddBookMark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
