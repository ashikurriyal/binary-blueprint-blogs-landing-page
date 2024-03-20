

import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Banner from './Components/Banner/Banner'

import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='md:flex '>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
