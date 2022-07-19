import React from 'react'

import { Routes, Route } from 'react-router-dom'
import AddBlog from './components/AddBlog'
import Auth from './components/Auth'
import BlogDetail from './components/BlogDetail'
import Blogs from './components/Blogs'
import Header from './components/Header'
import UserBlogs from './components/UserBlogs'

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/myBlogs' element={<UserBlogs />} />
          <Route path='/myBlogs/:id' element={<BlogDetail />} />
          <Route path='/blogs/add' element={<AddBlog />} />

        </Routes>
      </main>
    </>
  )
}

export default App