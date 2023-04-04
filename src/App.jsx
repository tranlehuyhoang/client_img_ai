import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from "../pages"
function App() {


  return (
    <BrowserRouter>
      <header  style={{display :'flex'}}>
        <Link to={'/'}>Trang chủ---</Link>
        <br />
        <Link to={'/create-post'}>Tạo ảnh</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create-post' element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
