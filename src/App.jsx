import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from "../pages"
function App() {


  return (
    <BrowserRouter>
      <header  style={{display :'flex'}}>
        <Link to={'client_img_ai/'}>Trang chủ---</Link>
        <br />
        <Link to={'/client_img_ai/create-post'}>Tạo ảnh</Link>
      </header>
      <Routes>
        <Route path='/client_img_ai/' element={<Home />}></Route>
        <Route path='/client_img_ai/create-post' element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
